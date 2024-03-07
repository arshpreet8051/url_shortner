import express from "express";
import {connect} from "./connect.js";
import {URLmodel} from "./modules/model.js";
import {Router} from "./routes/url.js";

const app = express();

// DB connection
connect("mongodb://127.0.0.1:27017/short-url")
  .then(() => {
    console.log("Connected successfully to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = 8001;

app.use(express.json());

app.use("/url", Router);
app.use("/analytics",Router);

app.get("/",(req,res)=>{
    res.json("hi");
})

app.get("/:shortId",async(req,res)=>{

    const ShortId = req.params.shortId;
    const entry = await URLmodel.findOneAndUpdate({
        ShortId
    },{$push:{
        VisitedInfo : {timestamp:Date.now()}
    }});

    res.redirect(entry.RedirectUrl);
})
app.listen(PORT, () => {
  console.log(`Listening at PORT ${PORT}`);
});
