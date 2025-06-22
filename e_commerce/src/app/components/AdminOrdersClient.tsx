"use client";

import { useState, useEffect, useRef } from "react";
import useSWR from "swr";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { Chart } from "chart.js"; // Added import for Chart type
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ClientOrder } from "../../../schema/interfaces/ClientOrder";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface Props {
  initialOrders: ClientOrder[];
  isAuthenticated: boolean;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Define order statuses and their colors for consistency
const statuses = ["pending", "shipped", "out for delivery", "delivered", "cancelled"];
const statusColors = {
  pending: "rgba(234, 179, 8, 0.6)",        // yellow-500
  shipped: "rgba(59, 130, 246, 0.6)",       // blue-500
  "out for delivery": "rgba(99, 102, 241, 0.6)", // indigo-500
  delivered: "rgba(34, 197, 94, 0.6)",      // green-500
  cancelled: "rgba(239, 68, 68, 0.6)",      // red-500
};

// Toast hook
function useToast() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const displayToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const ToastComponent = () => (
    showToast && (
      <div className="fixed bottom-6 right-6 z-50 flex items-center bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-lg shadow-md animate-slide-in space-x-3 max-w-sm w-full">
        <CheckCircleIcon className="h-6 w-6 text-green-600" />
        <span className="flex-1 text-sm font-medium">{toastMessage}</span>
        <button
          onClick={() => setShowToast(false)}
          className="text-green-800 hover:text-green-600 transition"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    )
  );

  return { displayToast, ToastComponent };
}

export default function AdminOrdersClient({ initialOrders, isAuthenticated: serverAuthenticated }: Props) {
  const [filterManage, setFilterManage] = useState("");
  const [filterCompleted, setFilterCompleted] = useState("");
  const [filterCancelled, setFilterCancelled] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<ClientOrder | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [keyInput, setKeyInput] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [filteredOrders, setFilteredOrders] = useState<ClientOrder[]>(initialOrders);
  const { data: orders, mutate } = useSWR<ClientOrder[]>(
    isAuthenticated ? "/api/mangana" : null,
    fetcher,
    { fallbackData: initialOrders, refreshInterval: 60000 }
  );
  const chartRef = useRef<HTMLDivElement>(null);
const [chartInstance, setChartInstance] = useState<Chart<"bar", number[], string> | null>(null);
  const { displayToast, ToastComponent } = useToast();

  useEffect(() => {
    const authData = localStorage.getItem("adminAuth");
    if (authData) {
      const { timestamp } = JSON.parse(authData);
      const now = Date.now();
      if (now - timestamp < 3600000) setIsAuthenticated(true);
      else {
        localStorage.removeItem("adminAuth");
        setIsAuthenticated(serverAuthenticated);
      }
    } else setIsAuthenticated(serverAuthenticated);
  }, [serverAuthenticated]);

  useEffect(() => {
    if (!orders) return;
    let tempOrders = orders;
    if (startDate && endDate) {
      tempOrders = tempOrders.filter((order) => {
        if (!order.createdAt) return false;
        const orderDate = new Date(order.createdAt);
        return orderDate >= startDate && orderDate <= endDate;
      });
    }
    setFilteredOrders(tempOrders);
  }, [startDate, endDate, orders]);

  useEffect(() => {
    if (chartRef.current && chartInstance) {
      const resizeObserver = new ResizeObserver(() => {
        chartInstance.resize();
      });
      resizeObserver.observe(chartRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [chartInstance]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: keyInput }),
    });
    if (response.ok) {
      localStorage.setItem("adminAuth", JSON.stringify({ timestamp: Date.now() }));
      setIsAuthenticated(true);
      window.location.reload();
    } else alert("Invalid key");
  };

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!response.ok) throw new Error("Failed to update order");
      const updatedOrder = await response.json();
      const updatedOrders = orders?.map((o) => (o._id === updatedOrder._id ? updatedOrder : o));
      mutate(updatedOrders, false);
      displayToast(`Order ${orderId} status updated to ${newStatus}`);
    } catch (error) {
      console.error("Error updating order status:", error);
      displayToast("Failed to update order status");
    }
  };

  const processDataForGraph = (orders: ClientOrder[]) => {
    const data: { [date: string]: { [status: string]: number } } = {};
    const formatter = new Intl.DateTimeFormat("en-US", { dateStyle: "medium" });
    orders.forEach((order) => {
      if (order.createdAt) {
        const date = formatter.format(new Date(order.createdAt));
        const status = order.shippingAddress.status;
        if (!data[date]) data[date] = {};
        data[date][status] = (data[date][status] || 0) + 1;
      }
    });
    return data;
  };

  const graphData = processDataForGraph(filteredOrders);
  const chartData = {
    labels: Object.keys(graphData),
    datasets: statuses.map((status) => ({
      label: status,
      data: Object.keys(graphData).map((date) => graphData[date][status] || 0),
      backgroundColor: statusColors[status as keyof typeof statusColors],
      borderColor: statusColors[status as keyof typeof statusColors].replace("0.6", "1"),
      borderWidth: 1,
    })),
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { stacked: true, beginAtZero: true, title: { display: true, text: "Number of Orders" } },
      x: { stacked: true, title: { display: true, text: "Date" } },
    },
    plugins: { legend: { display: true } },
  };

  const manageOrders = orders?.filter((o) => !["delivered", "cancelled"].includes(o.shippingAddress.status));
  const completedOrders = orders?.filter((o) => o.shippingAddress.status === "delivered");
  const cancelledOrders = orders?.filter((o) => o.shippingAddress.status === "cancelled");

  const filteredManage = manageOrders?.filter((o) =>
    o._id.includes(filterManage) || o.shippingAddress.name.toLowerCase().includes(filterManage.toLowerCase())
  );
  const filteredCompleted = completedOrders?.filter((o) =>
    o._id.includes(filterCompleted) || o.shippingAddress.name.toLowerCase().includes(filterCompleted.toLowerCase())
  );
  const filteredCancelled = cancelledOrders?.filter((o) =>
    o._id.includes(filterCancelled) || o.shippingAddress.name.toLowerCase().includes(filterCancelled.toLowerCase())
  );

  const resetDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  if (!isAuthenticated) {
    return (
      <>
        <div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
          <div className="flex justify-center">
            <div className="flex flex-col justify-center text-2xl font-semibold text-black">
              Management
            </div>
          </div>
        </div>
        <div className="text-black flex justify-center my-20">
          <div className="flex flex-col justify-center gap-1">
            <h2 className="text-2xl font-semibold mb-4 flex justify-center">Admin Access</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="password"
                  value={keyInput}
                  onChange={(e) => setKeyInput(e.target.value)}
                  placeholder="Enter secret key"
                  className="border rounded p-2 w-full max-w-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center text-2xl font-semibold text-black">
            Management
          </div>
        </div>
      </div>
      <div className="my-20 w-full">
        <div className="max-w-7xl mx-auto p-4 sm:p-8 space-y-12 text-black">
          {/* Orders Over Time */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Orders Over Time</h2>
            <div className="mb-4 flex flex-col sm:flex-row gap-4 items-start sm:items-end">
              <div>
                <label className="block mb-1 text-sm font-medium">Start Date:</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date | null) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  className="border p-2 rounded w-full"
                  placeholderText="Select start date"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">End Date:</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date: Date | null) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate || undefined}
                  className="border p-2 rounded w-full"
                  placeholderText="Select end date"
                />
              </div>
              <button
                onClick={resetDates}
                className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
              >
                Reset
              </button>
            </div>
            <div ref={chartRef} className="w-full h-64">
              {filteredOrders.length > 0 ? (
  <Bar
    data={chartData}
    options={chartOptions}
    ref={(chart) => setChartInstance(chart || null)}
  />
              ) : (
                <p className="text-center text-gray-500">No orders to display for the selected range.</p>
              )}
            </div>
          </section>

          {/* Manage Orders */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Manage Orders</h2>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search orders..."
                className="border rounded p-2 pl-8 w-full max-w-sm"
                value={filterManage}
                onChange={(e) => setFilterManage(e.target.value)}
              />
              <MagnifyingGlassIcon className="absolute left-2 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {filteredManage?.map((order) => (
                <div key={order._id} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm">Order ID: {order._id}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClasses(order.shippingAddress.status)}`}>
                      {order.shippingAddress.status}
                    </span>
                  </div>
                  <p className="text-sm">Customer: {order.shippingAddress.name}</p>
                  <div className="mt-2 flex space-x-2">
                    <button
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                      onClick={() => { setSelectedOrder(order); setIsModalOpen(true); }}
                    >
                      View
                    </button>
                    <select
                      className="px-2 py-1 border rounded text-sm"
                      value={order.shippingAddress.status}
                      onChange={(e) => handleStatusChange(order._id, e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="shipped">Shipped</option>
                      <option value="out for delivery">Out For Delivery</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium">Order ID</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Customer</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Status</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredManage?.map((order) => (
                    <tr key={order._id} className="border-b even:bg-gray-50 hover:bg-gray-100">
                      <td className="px-4 py-2 text-sm">{order._id}</td>
                      <td className="px-4 py-2 text-sm">{order.shippingAddress.name}</td>
                      <td className="px-4 py-2 text-sm capitalize">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClasses(order.shippingAddress.status)}`}>
                          {order.shippingAddress.status}
                        </span>
                      </td>
                      <td className="px-4 py-2 space-x-2">
                        <button
                          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                          onClick={() => { setSelectedOrder(order); setIsModalOpen(true); }}
                        >
                          View
                        </button>
                        <select
                          className="px-2 py-1 border rounded text-sm"
                          value={order.shippingAddress.status}
                          onChange={(e) => handleStatusChange(order._id, e.target.value)}
                        >
                          <option value="pending">Pending</option>
                          <option value="shipped">Shipped</option>
                          <option value="out for delivery">Out For Delivery</option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Completed Orders */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Completed Orders</h2>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search completed orders..."
                className="border rounded p-2 pl-8 w-full max-w-sm"
                value={filterCompleted}
                onChange={(e) => setFilterCompleted(e.target.value)}
              />
              <MagnifyingGlassIcon className="absolute left-2 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {filteredCompleted?.map((order) => (
                <div key={order._id} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm">Order ID: {order._id}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClasses(order.shippingAddress.status)}`}>
                      {order.shippingAddress.status}
                    </span>
                  </div>
                  <p className="text-sm">Customer: {order.shippingAddress.name}</p>
                  <div className="mt-2">
                    <button
                      className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                      onClick={() => { setSelectedOrder(order); setIsModalOpen(true); }}
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium">Order ID</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Customer</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Status</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCompleted?.map((order) => (
                    <tr key={order._id} className="border-b even:bg-gray-50 hover:bg-gray-100">
                      <td className="px-4 py-2 text-sm">{order._id}</td>
                      <td className="px-4 py-2 text-sm">{order.shippingAddress.name}</td>
                      <td className="px-4 py-2 text-sm capitalize">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClasses(order.shippingAddress.status)}`}>
                          {order.shippingAddress.status}
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        <button
                          className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                          onClick={() => { setSelectedOrder(order); setIsModalOpen(true); }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Cancelled Orders */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Cancelled Orders</h2>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search cancelled orders..."
                className="border rounded p-2 pl-8 w-full max-w-sm"
                value={filterCancelled}
                onChange={(e) => setFilterCancelled(e.target.value)}
              />
              <MagnifyingGlassIcon className="absolute left-2 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {filteredCancelled?.map((order) => (
                <div key={order._id} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm">Order ID: {order._id}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClasses(order.shippingAddress.status)}`}>
                      {order.shippingAddress.status}
                    </span>
                  </div>
                  <p className="text-sm">Customer: {order.shippingAddress.name}</p>
                  <div className="mt-2">
                    <button
                      className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                      onClick={() => { setSelectedOrder(order); setIsModalOpen(true); }}
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium">Order ID</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Customer</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Status</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCancelled?.map((order) => (
                    <tr key={order._id} className="border-b even:bg-gray-50 hover:bg-gray-100">
                      <td className="px-4 py-2 text-sm">{order._id}</td>
                      <td className="px-4 py-2 text-sm">{order.shippingAddress.name}</td>
                      <td className="px-4 py-2 text-sm capitalize">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClasses(order.shippingAddress.status)}`}>
                          {order.shippingAddress.status}
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        <button
                          className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                          onClick={() => { setSelectedOrder(order); setIsModalOpen(true); }}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Order Details Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-black opacity-30" onClick={() => setIsModalOpen(false)} />
              <div
                className="bg-white rounded-lg p-4 sm:p-6 w-11/12 sm:w-full max-w-lg z-10 transform transition-all duration-300 ease-in-out"
                style={{ transform: isModalOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(-10px)', opacity: isModalOpen ? 1 : 0 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Order Details</h3>
                  <button
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                    onClick={() => setIsModalOpen(false)}
                  >
                    ×
                  </button>
                </div>
                {selectedOrder && (
                  <div className="space-y-2 text-sm">
                    <p><strong>Order ID:</strong> {selectedOrder._id}</p>
                    <p><strong>Product:</strong> {selectedOrder.product_name}</p>
                    <p><strong>Price:</strong> ${selectedOrder.product_price.toFixed(2)}</p>
                    <p><strong>Customer:</strong> {selectedOrder.shippingAddress.name}</p>
                    <p><strong>Email:</strong> {selectedOrder.shippingAddress.email}</p>
                    <p><strong>Phone:</strong> {selectedOrder.shippingAddress.phone}</p>
                    <p><strong>Address:</strong> {selectedOrder.shippingAddress.address}</p>
                    <p><strong>Status:</strong> {selectedOrder.shippingAddress.status}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          <ToastComponent />
        </div>
      </div>
    </>
  );
}

function getStatusClasses(status: string) {
  switch (status) {
    case "pending": return "bg-yellow-100 text-yellow-700";
    case "shipped": return "bg-blue-100 text-blue-700";
    case "out for delivery": return "bg-indigo-100 text-indigo-700";
    case "delivered": return "bg-green-100 text-green-700";
    case "cancelled": return "bg-red-100 text-red-700";
    default: return "bg-gray-100 text-gray-700";
  }
}