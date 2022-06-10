import { Error } from "mongoose";

const Product = require('../Models/product/Product');

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    createdAt: string;
}

exports.index = function (req: Request, res: Response) {
    Product.get(function (err: Error, product: Product) {
        res.send('Express + TypeScript Server');
        
    });
};