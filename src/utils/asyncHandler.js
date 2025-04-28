const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    // Call the async function (fn) with the request, response, and next parameters
  };
};

export { asyncHandler };

// This function is a placeholder for an async error handling middleware in an Express.js application.

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next); // Call the async function (fn) with the request, response, and next parameters
//   } catch (error) {
//     res
//       .status(error.code || 500)
//       .json({ sucess: false, message: error.message }); // Pass the error to the next middleware or error handler
//   }
// };
