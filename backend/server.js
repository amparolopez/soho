require ('dotenv').config()
const Router = require("./routes/route")
const express = require("express")
const cors = require("cors")
require ('./config/database')
const app = express()


app.use(cors())
app.use(express.json())
app.use("/api",Router)
app.listen(5000, ()=>{console.log("Server is listening to port 5000")})