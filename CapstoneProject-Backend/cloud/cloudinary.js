import {v2 as cloudinary} from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary'; 
import multer from 'multer';
import "dotenv/config";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Create a storage object with Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'match-location', // Folder name in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg'], // Allowed file formats
    public_id: (req, file) => file.originalname.split('.')[0], // Remove file extension
    }
  }
);

// Create a multer instance with the storage configuration
const upload = multer({ storage: storage });

export default upload;

