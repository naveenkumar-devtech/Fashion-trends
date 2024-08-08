const express   = require("express")
const colors    = require("colors")
const dotenv    = require("dotenv").config()
const morgan    = require("morgan")
const rootroute = require("./routes/rootroute")
const productroute = require("./routes/productroute")

const PORT = process.env.PORT || 6000
const connectDB = require("./config/db")

const app  = express()


connectDB()     //it is async function(trans function)

app.use("/",rootroute)

app.use("/fashiontrends",productroute)

app.listen(PORT,()=>{
    console.log("Server is running".bgBlue.white)
})


// -----------------------------------------------------------------


// const http = require("http");
// const nodemailer = require("nodemailer");

// const server = http.createServer((request, response) => {
//     const auth = nodemailer.createTransport({
//         service: "gmail",
//         secure : true,
//         port : 465,
//         auth: {
//             user: "naveentyut@gmail.com",
//             pass: "adhvwwmodxaaulot"

//         }
//     });

//     const receiver = {
//         from : "naveentyut@gmail.com",
//         to : "sharma10aditya10@gmail.com",
//         subject : "Node Js Mail Testing!",
//         text : "Hello this is a text mail!"
//     };

//     auth.sendMail(receiver, (error, emailResponse) => {
//         if(error)
//         throw error;
//         console.log("success!");
//         response.end();
//     });
    
// });

// server.listen(8080);
