import axios from 'axios';
import "dotenv/config";
import { client } from './sanityClient.js';

async function uploadImageToSanity(imageUrl: string): Promise<string> {
  try {
    // Fetch the image from the URL and convert it to a buffer
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);

    // Upload the image to Sanity
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(), // Extract the filename from URL
    });

    // Debugging: Log the asset returned by Sanity
    console.log('Image uploaded successfully:', asset);

    return asset._id; // Return the uploaded image asset reference ID
  } catch (error) {
    console.error('❌ Failed to upload image:', imageUrl, error);
    throw error;
  }
}

async function importData() {
  try {
    // Fetch data from MockAPI
    const response = await axios.get(`${process.env.mockApi}`);
    const products = response.data;
    console.log(products);
    // Iterate over the products from MockAPI
    for (const product of products) {
      let imageRef = '';

      // Upload image and get asset reference if an image URL is provided
      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }

      // Prepare the product data to be uploaded to Sanity
      const sanityProduct = {
        _id: `product-${product.ID}`, // Use MockAPI product ID to ensure unique Sanity ID
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageRef, // Set the correct image asset reference if image exists
          },
        },
        _type: 'product', // Sanity document type
        name: product.Name, // Map the product name from MockAPI
        price: product.Price, // Map the product price
        stock: product.Stock, // Map the product stock
        category: product.Category, // Map the product category
        tag: product.Tags, // Use Tags from MockAPI (empty array if not present)
        rating: product.Rating && product.Rating <= 5 ? product.Rating : 5,
        description: product.Description || 'No description available', // Map description if exists
      };

      // Log the product before uploading to Sanity (for debugging purposes)
      console.log('Uploading product:', sanityProduct);

      // Upload the product to Sanity
      await client.createOrReplace(sanityProduct);
      console.log(`✅ Imported product: ${sanityProduct.name}`);
    }

    console.log('✅ Data import completed!');
  } catch (error) {
    console.error('❌ Error importing data:', error);
  }
}

// Start the import process
importData();
