import express from "express";

import { homePage } from "../controllers/homeController.js";
import { adminController } from "../controllers/adminController.js";
const router = express.Router();

router.get("/", homePage);
router.get("/admin", adminController.index);


export default router;