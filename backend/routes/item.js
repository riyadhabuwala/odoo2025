// backend/routes/item.js
import express from "express";
import multer from "multer";
import path from "path";
import Item from "../models/item.js"; // Import the Item model
 // Import the authentication middleware

const router = express.Router();

// --- Multer Configuration for Image Uploads ---

// Set up storage engine for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define the directory where images will be stored
    // Ensure this directory exists in your backend project (e.g., backend/uploads/)
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Define the filename: fieldname-timestamp.ext
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize upload middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB (5 * 1024 * 1024 bytes)
  fileFilter: function (req, file, cb) {
    // Check file type to allow only images
    checkFileType(file, cb);
  }
}).array('images', 5); // Allow up to 5 images for the 'images' field

// Function to check file type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}
// --- Item API Routes ---

// @route   GET /api/items
// @desc    Get all items that are approved by admin and available for swap/redemption
// @access  Public
router.get("/", async (req, res) => {
  try {
    // Find items where isApproved is true and status is 'available'
    const approvedItems = await Item.find({ isApproved: true, status: 'available' })
      .populate('uploadedBy', 'name email'); // Populate uploader's name and email

    res.status(200).json(approvedItems);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   POST /api/items
// @desc    Add a new clothing item (User route)
// @access  Private (requires JWT token)
router.post("/",  (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      // Multer error (e.g., file type, file size)
      return res.status(400).json({ message: err });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No image files uploaded." });
    }

    try {
      // req.user is populated by the 'protect' middleware
      // req.body contains other form fields
      // req.files contains information about the uploaded files

      const { title, description, category, type, size, condition, tags, pointsValue } = req.body;

      // Map uploaded file paths to store in the database
      const imagePaths = req.files.map(file => `/uploads/${file.filename}`); // Store relative paths

      // Create new item
      const newItem = new Item({
  title,
  description,
  category,
  type,
  size,
  condition,
  tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
  images: imagePaths,
  uploadedBy: "64f9e8cf12ab345678cde901", // ✅ Replace with a real ObjectId from your users collection
  pointsValue: pointsValue || 0,
});


      const item = await newItem.save();
      res.status(201).json({ message: "Item added successfully", item });

    } catch (dbErr) {
      console.error(dbErr.message);
      // Handle Mongoose validation errors or other DB errors
      if (dbErr.name === 'ValidationError') {
        let errors = {};
        Object.keys(dbErr.errors).forEach((key) => {
          errors[key] = dbErr.errors[key].message;
        });
        return res.status(400).json({ message: "Validation Error", errors });
      }
      console.error(dbErr); // 👈 Add this for visibility
    res.status(500).json({ message: "Server Error during item creation", error: dbErr.message });

    }
  });
});

export default router;
