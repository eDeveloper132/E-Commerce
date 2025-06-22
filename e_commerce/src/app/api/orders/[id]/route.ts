import { NextRequest, NextResponse } from "next/server";
import { getOrderByIdAndUpdateStatus } from "../../../../../lib/mongodbHelpers";

// PUT handler remains unchanged
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  let body;
  try {
    body = await request.json();
  } catch (error) {
    console.log("Error parsing request body:", error);
    return NextResponse.json({ error: "Invalid JSON in request body" }, { status: 400 });
  }

  const { status } = body;
  if (!status) {
    return NextResponse.json({ error: "Status is required" }, { status: 400 });
  }

  try {
    const updatedOrder = await getOrderByIdAndUpdateStatus(id, status);
    if (!updatedOrder) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }
    return NextResponse.json(updatedOrder);
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json(
      { error: "Failed to update order" },
      { status: 500 }
    );
  }
}

// Add this comment to suppress the type error
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const formData = await request.formData();
  const status = formData.get("status");
  if (!status) {
    return NextResponse.json({ error: "Status is required" }, { status: 400 });
  }

  try {
    const updatedOrder = await getOrderByIdAndUpdateStatus(id, status as string);
    if (!updatedOrder) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }
    return NextResponse.redirect(new URL("/dashboard", request.url));
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json(
      { error: "Failed to update order" },
      { status: 500 }
    );
  }
}