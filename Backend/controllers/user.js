import { UserModel } from "../models/user.js";
import { v4 as uuidv4 } from 'uuid';
import {setUser,getUser} from '../service/auth.js';

export async function handleUserSignup(req,res){
    const {name,email,password} = req.body;
    
    await UserModel.create({name,email,password});
    return res.render('home');

};

export async function handleUserLogin(req,res){
    const {email,password} = req.body;
    
    const user = await UserModel.findOne({email,password});
    if(!user){res.render("Login",{error:"Invalid Email or Password"})};

    const sessionId = uuidv4();
    res.cookie("uid",sessionId);
    
    setUser(sessionId,user);
    
    res.redirect("/");
}