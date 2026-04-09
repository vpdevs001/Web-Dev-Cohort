import type { Request, Response } from "express";
import { loginPayloadModel } from "./models";
import APIError from "../common/error";
import APIResponse from "../common/response";
import ApiResponse from "../common/response";

class AuthController {
  public static async handleLogin(req: Request, res: Response) {
    const validationResult = await loginPayloadModel.safeParseAsync(req.body);

    if (!validationResult.success) {
      throw APIError.badRquest("Invalid credentials");
    }

    return ApiResponse.ok(res, "Login successful", {
      token: "dummy-jwt-token", // Replace with a valid JWT token
    });

    // Add database
  }

  public static async handleSignup(req: Request, res: Response) {
    const validationResult = await loginPayloadModel.safeParseAsync(req.body);

    if (!validationResult.success) {
      throw APIError.badRquest("Invalid credentials");
    }

    return APIResponse.created(res, "Signup successful", {
      token: "dummy-jwt-token", // Replace with a valid JWT token
    });
  }
}

export default AuthController;