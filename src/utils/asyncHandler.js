// Define a function named asyncHandler. This function is a higher-order function that takes another function as its argument.
const asyncHandler = (requestHandler) => {
  // Return a new function that takes three arguments: req, res, and next.
  // These are the standard arguments for an Express.js middleware function.
  // req is the request object, res is the response object, and next is a function to call the next middleware in the chain.
  return (req, res, next) => {
    // Call the requestHandler function with req and res as arguments, and wrap it with Promise.resolve.
    // This ensures that the result is a promise, even if requestHandler doesn't return one.
    // If the promise is rejected (i.e., if requestHandler throws an error), the catch handler will catch the error and pass it to the next function.
    Promise.resolve(requestHandler(req, res)).catch((err) => next(err));
  };
};

// Export the asyncHandler function for use in other modules.
export { asyncHandler };

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
