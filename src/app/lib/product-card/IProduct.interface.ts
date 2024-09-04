export interface IProduct {
    productId: string;
    productName: string;
    productImage: string;
    category: string;
    inStock: boolean;
    productOnSale: boolean;
    salePercentage: number | null;
    originalPrice: number;
    discountedPrice: number | null;
}