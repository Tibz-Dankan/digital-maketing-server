const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

if (process.env.NODE_ENV === "production"){
    app.use(cors({origin: process.env.PRODUCTION_URL}));
}else{
    app.use(cors());
}
app.use(express.json())

// some routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`server started on port ${PORT}...`)
);