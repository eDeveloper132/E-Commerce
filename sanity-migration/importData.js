"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
require("dotenv/config");
var sanityClient_js_1 = require("./sanityClient.js");
function uploadImageToSanity(imageUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var response, buffer, asset, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.get(imageUrl, { responseType: 'arraybuffer' })];
                case 1:
                    response = _a.sent();
                    buffer = Buffer.from(response.data);
                    return [4 /*yield*/, sanityClient_js_1.client.assets.upload('image', buffer, {
                            filename: imageUrl.split('/').pop(), // Extract the filename from URL
                        })];
                case 2:
                    asset = _a.sent();
                    // Debugging: Log the asset returned by Sanity
                    console.log('Image uploaded successfully:', asset);
                    return [2 /*return*/, asset._id]; // Return the uploaded image asset reference ID
                case 3:
                    error_1 = _a.sent();
                    console.error('❌ Failed to upload image:', imageUrl, error_1);
                    throw error_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function importData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, products, _i, products_1, product, imageRef, sanityProduct, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 8, , 9]);
                    return [4 /*yield*/, axios_1.default.get("".concat(process.env.mockApi))];
                case 1:
                    response = _a.sent();
                    products = response.data;
                    console.log(products);
                    _i = 0, products_1 = products;
                    _a.label = 2;
                case 2:
                    if (!(_i < products_1.length)) return [3 /*break*/, 7];
                    product = products_1[_i];
                    imageRef = '';
                    if (!product.image) return [3 /*break*/, 4];
                    return [4 /*yield*/, uploadImageToSanity(product.image)];
                case 3:
                    imageRef = _a.sent();
                    _a.label = 4;
                case 4:
                    sanityProduct = {
                        _id: "product-".concat(product.ID), // Use MockAPI product ID to ensure unique Sanity ID
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
                    return [4 /*yield*/, sanityClient_js_1.client.createOrReplace(sanityProduct)];
                case 5:
                    // Upload the product to Sanity
                    _a.sent();
                    console.log("\u2705 Imported product: ".concat(sanityProduct.name));
                    _a.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 2];
                case 7:
                    console.log('✅ Data import completed!');
                    return [3 /*break*/, 9];
                case 8:
                    error_2 = _a.sent();
                    console.error('❌ Error importing data:', error_2);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
// Start the import process
importData();
