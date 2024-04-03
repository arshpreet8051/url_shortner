import mongoose from "mongoose";

const URLschema = new mongoose.Schema({
    ShortId:{
        type:String,
        required:true,
        unique:true
    },
    // Redirect url is the actual url to be visited
    RedirectUrl:{
        type:String,
        required:true
    },
    VisitedInfo:[{timestamp:{type:Number}}],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
}, {timestamps:true});

export const URLmodel = mongoose.model("url",URLschema);

// export default {URLmodel};