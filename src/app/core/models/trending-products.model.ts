import { Price } from './price.model';
import { ProductInfo } from './product-info.model';

export class TrendingProducts {
    id: number;
    productType: string;
    description: string;
    color: string[];
    rating: number;
    price: Price;
    productinfo: ProductInfo;
    quantity: number;
    addtocart: boolean;
    adtowishlist: boolean;
    productimageurl: string;
    status: string;
}
