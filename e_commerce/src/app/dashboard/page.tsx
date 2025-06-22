import { auth } from "@clerk/nextjs/server";
import { OrderModel } from "../../../schema/schemas";
import IOrder from "../../../schema/interfaces/IOrder";

export default async function Dashboard() {
  const { userId } = await auth();
  const orders: IOrder[] = await OrderModel.find({ user_clerk_id: userId });

  const getStatusClasses = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "shipped":
        return "bg-blue-100 text-blue-700";
      case "out for delivery":
        return "bg-indigo-100 text-indigo-700";
      case "delivered":
        return "bg-green-100 text-green-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <>
      <div className="h-[286px] bg-[#F6F5FF] flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center text-2xl font-semibold text-black">
            My Orders
          </div>
        </div>
      </div>
      <div className="px-4 py-8 max-w-screen-xl mx-auto my-20">
        {orders.length === 0 ? (
          <div className="text-gray-600 text-base sm:text-lg text-center mt-12">
            🚫 You havent placed any orders yet.
          </div>
        ) : (
          <div
            className="
              grid gap-6
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
            "
          >
            {orders.map((order) => (
              <div
                key={order._id.toString()}
                className="
                  bg-white border rounded-2xl p-4 sm:p-5
                  shadow-sm hover:shadow-lg transition-shadow duration-200
                  flex flex-col justify-between
                "
              >
                <header className="flex justify-between items-start mb-4 flex-wrap">
                  <h2 className="text-sm sm:text-lg font-semibold text-gray-800 break-all">
                    Order ID: {order._id.toString()}
                  </h2>
                  {order.shippingAddress.status === "pending" ? (
                    <form
                      action={`/api/orders/${order._id}`}
                      method="POST"
                      className="mt-2 sm:mt-0 flex items-center"
                    >
                      <select
                        name="status"
                        defaultValue="pending"
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full font-medium bg-gray-100 text-gray-700"
                      >
                        <option value="pending">Pending</option>
                        <option value="cancelled">Cancel</option>
                      </select>
                      <button
                        type="submit"
                        className="ml-2 px-2 py-1 text-xs sm:text-sm bg-blue-500 text-white rounded"
                      >
                        Update
                      </button>
                    </form>
                  ) : (
                    <span
                      className={`
                        mt-2 sm:mt-0 px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full font-medium
                        ${getStatusClasses(order.shippingAddress.status)}
                      `}
                    >
                      {order.shippingAddress.status
                        .split(" ")
                        .map((w) => w[0].toUpperCase() + w.slice(1))
                        .join(" ")}
                    </span>
                  )}
                </header>

                <div className="text-gray-700 space-y-1 text-xs sm:text-sm flex-1">
                  <p className="break-words">
                    <span className="font-medium">Name:</span>{" "}
                    {order.shippingAddress.name}
                  </p>
                  <p className="break-words">
                    <span className="font-medium">Email:</span>{" "}
                    {order.shippingAddress.email}
                  </p>
                  <p className="break-words">
                    <span className="font-medium">Phone:</span>{" "}
                    {order.shippingAddress.phone}
                  </p>
                </div>

                <footer className="mt-4 text-gray-800 text-sm sm:text-base">
                  <p>
                    <span className="font-medium">Total:</span>{" "}
                    {order.product_price.toFixed(2)}PKR
                  </p>
                </footer>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}