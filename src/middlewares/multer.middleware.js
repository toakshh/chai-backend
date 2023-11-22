import multer from "multer";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
        //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // NOTE: file.originalName is not standard form as users may upload files with same name that would cause to overwrite the existing file. but as cloudinary will delete the file once uploaded so its safe to use.
        cb(null, file.originalname)
    }
})

export const upload = multer({ storage, })