import { Router } from "express";

export const homeRoutes = Router();

homeRoutes.get("/", (rq, rs) => {
    rs.end("hello world");
});
