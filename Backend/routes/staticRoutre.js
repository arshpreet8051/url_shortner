import express from "express";
import { URLmodel } from "../models/model.js";

export const staticRouter = express.Router();

staticRouter.get("/",(req,res)=>{
   return res.render("home");
});

staticRouter.get("/getURls",async (req,res)=>{
    
    if(!req.user){res.redirect('./login')};

    const allurls = await URLmodel.find({createdBy:req.user._id});

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

staticRouter.get("/login",(req,res)=>{
    return res.render('Login');
});