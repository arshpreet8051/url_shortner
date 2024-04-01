import { UserModel } from "../modules/user.js";

export async function handleUserSignup(req,res){
    const {name,email,password} = req.body;
    
    await UserModel.create({name,email,password});
    return res.render('home');

}