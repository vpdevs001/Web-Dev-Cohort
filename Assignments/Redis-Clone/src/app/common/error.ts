class APIError extends Error {

  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
  
  static badRquest(message: string) {
    return new APIError(message, 400);
  }

  static notFound(message: string) {
    return new APIError(message, 404);
  }

  static internal(message: string) {
    return new APIError(message, 500);
  }

  static conflict(message: string) {
    return new APIError(message, 409);
  }
}

export default APIError;
