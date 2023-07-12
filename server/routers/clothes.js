import express from "express";
import {
    getClothes,
    addClothing,
    deleteClothing,
    updateClothing,
    getClothing
} from "../controllers/clothes.js"

const clothesRouter = express.Router();

clothesRouter.get("/", getClothes);
clothesRouter.get("/:id", getClothing);
clothesRouter.post("/", addClothing);
clothesRouter.delete("/:id", deleteClothing);
clothesRouter.put("/:id", updateClothing);

export default clothesRouter;