import express, { urlencoded } from "express";
import {connect} from "./connect.js";

import {URLmodel} from "./modules/model.js";

import {urlRouter} from "./routes/url.js";
import {staticRouter} from "./routes/staticRoutre.js";
import {userRouter} from "./routes/user.js"

import path from "path";

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
app.use(urlencoded({exyended:false}));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.get("/",staticRouter);
app.get("/getURLs",staticRouter);
app.get("/signup",staticRouter);

app.use("/url", urlRouter);
app.use("/analytics",urlRouter);
app.use("/user",userRouter);

// app.get("/",(req,res)=>{
//     res.json("hi");
// })

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  try {
      const entry = await URLmodel.findOneAndUpdate(
          { ShortId: shortId },
          { $push: { VisitedInfo: { timestamp: Date.now() } } }
      );

      if (!entry) {
          return res.status(404).send("Short URL not found");
      }

      res.redirect(entry.RedirectUrl);
  } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Listening at PORT ${PORT}`);
});
