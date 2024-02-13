// Define a class named apiResponse.
class apiResponse {
  // Define a constructor for the class that takes three arguments: statusCode, data, and message.
  constructor(
    statusCode, // The HTTP status code for the response.
    data, // The data to be sent in the response.
    message = "Success" // The message to be sent in the response. If not provided, it defaults to "Success".
  ) {
    // Assign the statusCode, data, and message arguments to properties of the same name on the instance.
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;

    // Determine the success property based on the statusCode.
    // If the statusCode is less than 400, the request was successful, so success is true.
    // If the statusCode is 400 or greater, the request failed, so success is false.
    this.success = statusCode < 400;
  }
}

// The apiResponse class is not exported, so it can only be used within this module.
// If you want to use it in other modules, you should add an export statement, like this: export { apiResponse };

export { apiResponse };
