"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
var client_1 = require("@sanity/client");
require("dotenv/config");
exports.client = (0, client_1.createClient)({
    projectId: "".concat(process.env.projectId), // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2025-01-17', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: "".concat(process.env.sanityToken),
});
