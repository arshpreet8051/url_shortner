import {getUser} from '../service/auth.js';

export async function restrictToLoggedUsersOnly(req,res,next){

    const userId = req.cookies?.uid;

    if(!userId)res.render('login');

    const user = getUser(userId);
    if(!user)res.redirect('/login');

    req.user = user;
    next();
};

export async function checkAuth(req,res,next){

    const userId = req.cookies?.uid;
    const user = getUser(userId);
    req.user = user;
    next();

};
