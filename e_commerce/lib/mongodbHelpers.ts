import { ClientOrder } from "../schema/interfaces/ClientOrder";
import { OrderModel, ProfileModel } from "../schema/schemas";

export async function getOrderByIdAndUpdateStatus(
  id: string,
  status: string
): Promise<ClientOrder | null> {
  const updatedOrder = await OrderModel.findByIdAndUpdate(
    id,
    { $set: { "shippingAddress.status": status } },
    { new: true }
  ).lean();
  if (!updatedOrder) return null;
  return {
    ...updatedOrder,
    _id: updatedOrder._id.toString(), // Convert ObjectId to string
  } as ClientOrder;
}
export async function getUserById(id: string) {
    const user = await ProfileModel.findOne({ clerk_user_id: id });
    return user;
}
export async function getOrders(): Promise<ClientOrder[]> {
  const orders = await OrderModel.find().lean();
  return orders.map(order => ({
    ...order,
    _id: order._id.toString(), // Explicitly convert ObjectId to string
  })) as ClientOrder[];
}