const express = require ('express')
const cors= require ('cors')
const dotenv = require("dotenv").config();
const db = require('./db/connection')
const incomeroutes=require('./routes/incomeroutes')
const expenseroutes=require('./routes/expenserouter')

// DB Connection
db()

const app = express();

// middlewares
app.use(cors({origin:"*"}))
app.use(express.json())

// routes
app.use("/api" , incomeroutes)

app.use("/api",expenseroutes)

app.get("/", (req, res) => {
    res.send("Welcome to Money Manager app");
  });

//PORT
const PORT = process.env.PORT || 8000;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on port ${PORT}`
  );
});