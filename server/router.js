import express from "express";
import {
    getClothes,
    addClothing,
    deleteClothing,
    updateClothing,
    getClothing
} from "./controller.js"

const router = express.Router();

router.get("/", getClothes);
router.get("/:id", getClothing);
router.post("/", addClothing);
router.delete("/:id", deleteClothing);
router.put("/:id", updateClothing);

export default router;