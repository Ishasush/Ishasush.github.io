//import librery
import express from "express";
import bodyParser from "body-parser";


//creating app using express and assigning port value 
const app = express();
const port = 3000;

//linking static folder to js
app.use(express.static("public"));

let data;
//sending main page 
app.get("/", (req, res) => {
    res.render("index.ejs" ,{ container: data });
  });



app.listen(port,()=>{
    console.log(`server is running in port:${port}`);
});