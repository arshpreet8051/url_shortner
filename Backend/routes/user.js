import express from "express";
import { handleUserSignup } from "../controllers/user.js";

// Create a new router instance
const userRouter = express.Router();

// Define routes
userRouter.post('/', handleUserSignup);

// Export the router instance
export { userRouter };
