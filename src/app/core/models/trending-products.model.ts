import { Price } from './price.model';
import {Productinfo} from './productinfo.model';

export class TrendingProducts {
    id: number;
    productType: string;
    description: string;
    color: string[];
    rating: number;
    price: Price;
    productinfo: Productinfo;
    quantity: number;
    addtocart: boolean;
    adtowishlist: boolean;
    productimageurl: string;
    status: string;
}
