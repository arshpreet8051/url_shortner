import { nanoid } from "nanoid";
import { URLmodel } from "../models/model.js";

export async function HandleUrlPostRequest(req, res) {
    const body = req.body;
    
    if (!body.url) {
        res.status(400).json({ error: "URL required" });
        return; // Added return statement to exit the function after sending response
    }

    const shortIdGenerated = nanoid(8);

    try {
        await URLmodel.create({
            ShortId: shortIdGenerated,
            RedirectUrl: body.url,
            VisitedInfo: [],
            createdBy:req.user._id
        });
        
        res.render('home',{id:shortIdGenerated});
        // res.json({ id: shortIdGenerated });
    } catch (error) {
        console.error("Error creating URL document:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function HandleUrlGetAnalytics(req,res){

        const ShortId = req.params.shortId;
        
        const result = await URLmodel.findOne({
            ShortId
        });

        return res.json({
            totalClicks : result.VisitedInfo.length,
            Details:result.VisitedInfo
        });

    }