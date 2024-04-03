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
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    VisitedInfo:[{timestamp:{type:String}}]
}, {timestamps:true});

export const URLmodel = mongoose.model("url",URLschema);

// export default {URLmodel};