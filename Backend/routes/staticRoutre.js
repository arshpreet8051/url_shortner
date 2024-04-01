import express from "express";
import { URLmodel } from "../modules/model.js";

export const staticRouter = express.Router();

staticRouter.get("/",(req,res)=>{
    res.render("home");
});

staticRouter.get("/getURls",async (req,res)=>{
    
    const allurls = await URLmodel.find({});

    res.render("allURL",
    {
        urls:allurls
    }
    );
    return;
    
});

staticRouter.get("/signup",(req,res)=>{
    return res.render('SignUp');
});