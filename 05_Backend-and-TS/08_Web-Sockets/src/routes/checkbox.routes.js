import { Router } from "express";
import { getCheckboxes } from "../controllers/checkbox.controllers.js";

const router = Router();

router.get("/", getCheckboxes);

export default router;
