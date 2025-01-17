"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const sanityClient_js_1 = require("./sanityClient.js");
async function uploadImageToSanity(imageUrl) {
    try {
        // Fetch the image from the URL and convert it to a buffer
        const response = await axios_1.default.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data);
        // Upload the image to Sanity
        const asset = await sanityClient_js_1.client.assets.upload('image', buffer, {
            filename: imageUrl.split('/').pop(), // Extract the filename from URL
        });
        // Debugging: Log the asset returned by Sanity
        console.log('Image uploaded successfully:', asset);
        return asset._id; // Return the uploaded image asset reference ID
    }
    catch (error) {
        console.error('❌ Failed to upload image:', imageUrl, error);
        throw error;
    }
}
async function importData() {
    try {
        // Fetch data from MockAPI
        const response = await axios_1.default.get('https://678a7733dd587da7ac2a4878.mockapi.io/products/Products');
        const products = response.data;
        // Iterate over the products from MockAPI
        for (const product of products) {
            let imageRef = '';
            // Upload image and get asset reference if an image URL is provided
            if (product.image) {
                imageRef = await uploadImageToSanity(product.image);
            }
            // Prepare the product data to be uploaded to Sanity
            const sanityProduct = {
                _id: `product-${product.id}`, // Use MockAPI product ID to ensure unique Sanity ID
                _type: 'product', // Sanity document type
                name: product.Name, // Map the product name from MockAPI
                price: product.Price, // Map the product price
                stock: product.Stock, // Map the product stock
                category: product.Category, // Map the product category
                tags: product.Tags || [], // Use Tags from MockAPI (empty array if not present)
                image: {
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: imageRef, // Set the correct image asset reference if image exists
                    },
                },
                description: product.Description || 'No description available', // Map description if exists
                rating: product.Rating?.rate || 0, // Map product rating if available
                ratingCount: product.Rating?.count || 0, // Map rating count if available
            };
            // Log the product before uploading to Sanity (for debugging purposes)
            console.log('Uploading product:', sanityProduct);
            // Upload the product to Sanity
            await sanityClient_js_1.client.createOrReplace(sanityProduct);
            console.log(`✅ Imported product: ${sanityProduct.name}`);
        }
        console.log('✅ Data import completed!');
    }
    catch (error) {
        console.error('❌ Error importing data:', error);
    }
}
// Start the import process
importData();
