import express from "express";
import {HandleUrlPostRequest,HandleUrlGetAnalytics} from "../controllers/post_url.js";

export const Router = express.Router();

Router.post("/",HandleUrlPostRequest);

Router.get("/:shortId",HandleUrlGetAnalytics);
// export{Router};

