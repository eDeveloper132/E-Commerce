import IOrder from './schema/interfaces/IOrder.js';
import transporter from './emailconfig';

async function sendOrderDetails(order: IOrder) {
    const customerName = order.shippingAddress.name;
    const dashboardUrl = 'http://localhost:3000/dashboard'; // Replace with actual dashboard URL

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: order.shippingAddress.email,
        subject: 'Your ShopEasy Order Confirmation',
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { text-align: center; margin-bottom: 20px; }
                    .order-summary { border: 1px solid #ddd; padding: 10px; margin-bottom: 20px; }
                    .cta { text-align: center; margin-top: 20px; }
                    .footer { text-align: center; font-size: 12px; color: #666; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Thank You for Your Order!</h1>
                        <p>Dear ${customerName},</p>
                    </div>
                    <p>Your order has been placed successfully. Here are the details:</p>
                    <div class="order-summary">
                        <h2>Order Summary</h2>
                        <p><strong>Product Name:</strong> ${order.product_name}</p>
                        <p><strong>Price:</strong> ${order.product_price}</p>
                    </div>
                    <div class="cta">
                        <a href="${dashboardUrl}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View Order Status</a>
                    </div>
                    <div class="footer">
                        <p>ShopEasy - Making shopping easy and fun!</p>
                        <p>Follow us on [Social Media Links]</p>
                    </div>
                </div>
            </body>
            </html>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Order details sent to customer successfully");
        return true;
    } catch (error) {
        console.error("Failed to send order details to customer:", error);
        return false;
    }
}

async function notifyOwner(order: IOrder) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.Owner_email,
        subject: 'New Order Received - ShopEasy',
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .section { margin-bottom: 20px; }
                    .section h2 { border-bottom: 1px solid #ddd; padding-bottom: 5px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>New Order Notification</h1>
                    <p>You have received a new order. Here are the details:</p>
                    <div class="section">
                        <h2>Product Details</h2>
                        <p><strong>Product Name:</strong> ${order.product_name}</p>
                        <p><strong>Product Price:</strong> ${order.product_price}</p>
                        <p><strong>Product Image:</strong> <img src="${order.product_image}" alt="Product Image" style="max-width: 200px;"></p>
                    </div>
                    <div class="section">
                        <h2>Shipping Address</h2>
                        <p><strong>Name:</strong> ${order.shippingAddress.name}</p>
                        <p><strong>Address:</strong> ${order.shippingAddress.address}</p>
                        <p><strong>Email:</strong> ${order.shippingAddress.email}</p>
                        <p><strong>Phone:</strong> ${order.shippingAddress.phone}</p>
                        <p><strong>Postal Code:</strong> ${order.shippingAddress.postalCode}</p>
                    </div>
                </div>
            </body>
            </html>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Order details sent to owner successfully");
        return true;
    } catch (error) {
        console.error("Failed to send order details to owner:", error);
        return false;
    }
}

export { sendOrderDetails, notifyOwner };