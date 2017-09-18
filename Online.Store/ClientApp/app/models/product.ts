
import { ProductComponent } from "./product-component";

export class Product {
    public id: string;
    public model: string;
    public sku: string;
    public price: number;
    public title: string;
    public description: string;
    public image: string;
    public rating: number;
    public rates: number;
    public productComponentsList: ProductComponent[];
}