import express from "express";
import { handleUserLogin, handleUserSignup } from "../controllers/user.js";

// Create a new router instance
const userRouter = express.Router();

// Define routes
userRouter.post('/', handleUserSignup);
userRouter.post("/login",handleUserLogin);

// Export the router instance
export { userRouter };
