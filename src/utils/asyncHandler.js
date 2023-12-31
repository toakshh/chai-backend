const asyncHandler = (reqHandlerFn) => {
    return (req, res, next) => {
        Promise.resolve(reqHandlerFn(req, res, next))
            .catch((err) => next(err))
    }
}
export { asyncHandler }

// const asyncHandler = (fn) => {
//     async (req, res, next) => {
//         try {
//             await fn(req, res, next)
//         } catch (error) {
//             res.status(err.code || 500).json({
//                 message: err.message,
//                 success: false
//             })
//         }
//     }
// }