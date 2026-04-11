import { Response } from "express";

class ApiResponse {
  static ok(res: Response, message: string, data: unknown = null): Response {
    return res.status(200).json({
      success: true,
      message,
      data,
    });
  }

  static created(
    res: Response,
    message: string,
    data: unknown = null,
  ): Response {
    return res.status(201).json({
      success: true,
      message,
      data,
    });
  }

  static noContent(res: Response): Response {
    return res.status(204).send();
  }
}

export default ApiResponse;
