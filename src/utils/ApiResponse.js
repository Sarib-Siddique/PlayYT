class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode; // This is the HTTP status code of the response
    this.data = data; // This is the data that will be sent in the response
    this.message = message; // This is the message that will be sent in the response
    this.success = statusCode < 400; // This indicates whether the request was successful or not
  }
}

export { ApiResponse };
// This class is used to create a standardized response format for API responses.
// It includes properties for the status code, data, message, and success status.
// The constructor takes in the status code, data, and an optional message, and sets the properties accordingly.
// The success property is set to true if the status code is less than 400 (indicating a successful request), and false otherwise.
