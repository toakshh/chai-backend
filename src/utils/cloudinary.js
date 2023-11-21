import { v2 as cloudinary } from "cloudinary";
import fs from "fs"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


// method to get path of local file and if uploaded successfully then unlink that file
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // when file uploaded successfully
        console.log("File uploaded successfully on cloudinary", response.url)
        return response
    } catch (error) {
        // remove the local saved file when operation fail.
        fs.unlinkSync(localFilePath);
        return null
    }
}

export { uploadOnCloudinary }