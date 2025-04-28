import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js"; // Import user routes

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true })); // Enable CORS for all routes

app.use(express.json({ limit: "16kb" })); // Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.static("public")); // Serve static files from the "public" directory
app.use(cookieParser()); // Parse cookies from the request headers

//routes declaration
app.use("/api/v1/users", userRouter); // Use user routes for all requests to /api/v1/users

export { app };
