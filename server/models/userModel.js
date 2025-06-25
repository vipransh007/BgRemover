import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  creditBalance: {
    type: Number,
    default: 5,
  },
});

// Use consistent model naming (e.g., "User" instead of "user")
const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;