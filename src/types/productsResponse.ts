import type { Product } from "./product.entity";

export interface ProductResponse {
    count:    number;
    pages:    number;
    products: Product[];
}
