import express from "express";
import {HandleUrlPostRequest,HandleUrlGetAnalytics} from "../controllers/post_url.js";

export const urlRouter = express.Router();

urlRouter.post("/",HandleUrlPostRequest);
urlRouter.get("/:shortId",HandleUrlGetAnalytics);
// export{Router};

