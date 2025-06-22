import { getOrders } from "../../../lib/mongodbHelpers";
import simple_connect_to_db from "../../../lib/simple_connect";
import AdminOrdersClient from "../components/AdminOrdersClient";
import { cookies } from 'next/headers';

export default async function management() {
  simple_connect_to_db();
  const cookieStore = await cookies();
  const adminToken = cookieStore.get('admin_token');
  const isAuthenticated = adminToken?.value === process.env.SECRET_ADMIN_KEY;
  const orders = isAuthenticated ? await getOrders() : [];
  return <AdminOrdersClient initialOrders={orders} isAuthenticated={isAuthenticated} />;
}