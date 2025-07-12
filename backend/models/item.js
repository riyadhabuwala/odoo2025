// backend/models/Item.js
import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title for the item"],
    trim: true, // Remove whitespace from both ends of a string
    maxlength: [100, "Title can not be more than 100 characters"]
  },
  description: {
    type: String,
    required: [true, "Please add a description for the item"],
    maxlength: [1000, "Description can not be more than 1000 characters"]
  },
  category: { // e.g., "Tops", "Bottoms", "Outerwear", "Dresses", "Accessories"
    type: String,
    required: [true, "Please specify a category"],
    enum: ["Tops", "Bottoms", "Outerwear", "Dresses", "Accessories", "Footwear", "Other"],
    default: "Other"
  },
  type: { // e.g., "T-Shirt", "Jeans", "Jacket", "Dress", "Scarf"
    type: String,
    required: [true, "Please specify the type of clothing"],
    trim: true
  },
  size: { // e.g., "XS", "S", "M", "L", "XL", "One Size", "30x32"
    type: String,
    required: [true, "Please specify the size"],
    trim: true
  },
  condition: { // e.g., "New with tags", "Excellent", "Good", "Fair", "Used"
    type: String,
    required: [true, "Please specify the condition"],
    enum: ["New with tags", "Excellent", "Good", "Fair", "Used"],
    default: "Good"
  },
  tags: { // Array of strings for searchability (e.g., ["vintage", "cotton", "summer"])
    type: [String],
    default: []
  },
  images: { // Array of strings to store image URLs (e.g., from cloud storage like Cloudinary)
    type: [String],
    required: [true, "At least one image is required for the item"],
    validate: {
      validator: function(v) {
        return v && v.length > 0; // Ensure the array is not empty
      },
      message: 'At least one image URL is required.'
    }
  },
  uploadedBy: { // Reference to the User who uploaded this item
    type: mongoose.Schema.ObjectId,
    ref: "User", // This refers to the 'User' model
    required: true
  },
  status: { // Current status of the item (e.g., available, swapped, redeemed, pending approval)
    type: String,
    enum: ["pending_approval", "available", "swapped", "redeemed", "rejected"],
    default: "pending_approval" // Items might need admin approval before becoming 'available'
  },
  isApproved: { // New field: true if approved by admin, false otherwise
    type: Boolean,
    default: false
  },
  pointsValue: { // Points required to redeem this item
    type: Number,
    default: 0,
    min: [0, "Points value cannot be negative"]
  }
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps automatically
});

// Create the Item model from the schema
const Item = mongoose.model("Item", itemSchema);

export default Item;
