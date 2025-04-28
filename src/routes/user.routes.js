import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"; // Import the multer middleware for file uploads
import { verifyJWT } from "../middlewares/auth.middleware.js"; // Import the JWT verification middleware

const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 }, // Limit to 1 file for avatar
    { name: "coverImage", maxCount: 1 }, // Limit to 5 files for images
  ]),
  registerUser,
); // Register a new user

router.route("/login").post(loginUser); // Login a user

// secured routes
router.route("/logout").post(verifyJWT, logoutUser);

export default router;
