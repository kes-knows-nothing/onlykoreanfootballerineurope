import express from "express";
import { home, league, player } from "../controllers/homeController";

const homeRouter = express.Router();

homeRouter.get("/", home)
homeRouter.get("/:league/", league)
homeRouter.get("/:league/:num", player)

export default homeRouter;

