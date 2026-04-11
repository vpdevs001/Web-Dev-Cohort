import { Router } from "express";
import AuthController from "./controllers";

const router = Router();

router.post("/signup", AuthController.handleSignup);
router.post("/login", AuthController.handleLogin);

export default router;
