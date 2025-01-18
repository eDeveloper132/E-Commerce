export default interface IProduct {
    _id: string;
    name: string;
    description: string;
    price: number;
    stock?: number;
    category?: string;
    tag?: string;
    rating?: number;
    image: {
        asset: {
            _ref: string;
        };
    };
}
