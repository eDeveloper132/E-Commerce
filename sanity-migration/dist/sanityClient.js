"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
const client_1 = require("@sanity/client");
exports.client = (0, client_1.createClient)({
    projectId: "onmb9fp6", // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2025-01-17', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: "skFKtFD3nBNBL5W2Jphuk8j9ZNLYs2KVlajB1GVwfMb13zfFp5AqbzK3mhqnEAWnL2iA66nXRVI5CsNlZLWx9qHEuwe3AAdsQThZ1wBDtBDPWe0M3Rh1y8sYi2xhQfX3Rr0EfGX2LA4gtBbmvfMkLIV4bcabSUzthh6BZBPDBVGAZLIbrsE1",
});
