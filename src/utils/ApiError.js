class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = "",
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null; // This is the data that will be sent in the response
    this.message = message; // This is the error message that will be sent in the response
    this.success = false; // This indicates whether the request was successful or not
    this.errors = errors; // This is the error object that will be sent in the response
    if (stack) {
      this.stack = stack; // This is the stack trace of the error
    } else {
      Error.captureStackTrace(this, this.constructor); // This captures the stack trace of the error
    }
  }
}

export { ApiError };
