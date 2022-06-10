import { Router } from "express";

export const Product = Router();

Product.get("/", (rq, rs) => {
    rs.end("hello world");
});
