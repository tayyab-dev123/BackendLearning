// Define a class named apiError that extends the built-in Error class.
class apiError extends Error {
  // Define a constructor for the class that takes four arguments: statusCode, message, errors, and stack.
  constructor(
    statusCode, // The HTTP status code for the error.
    message = "Something went wrong", // The error message. If not provided, it defaults to "Something went wrong".
    errors = [], // An array of additional error details. If not provided, it defaults to an empty array.
    stack = "" // The stack trace for the error. If not provided, it will be captured automatically.
  ) {
    // Call the constructor of the parent Error class with the message argument.
    super(message);

    // Assign the statusCode, message, and errors arguments to properties of the same name on the instance.
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;

    // Assign null to the data property and false to the success property on the instance.
    this.data = null;
    this.success = false;

    // If the stack argument was provided, assign it to the stack property on the instance.
    // Otherwise, capture the stack trace automatically using Error.captureStackTrace.
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// Export the apiError class for use in other modules.
export { apiError };
