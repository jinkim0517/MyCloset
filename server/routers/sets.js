import express from "express";
import {
    getSets,
    addSet,
    deleteSet,
    getSet
} from "../controllers/sets.js"

const setsRouter = express.Router();

setsRouter.get("/", getSets);
setsRouter.get("/:id", getSet);
setsRouter.post("/", addSet);
setsRouter.delete("/:id", deleteSet);

export default setsRouter;