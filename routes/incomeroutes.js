const express = require("express");
const addIncome = require("../controller/incomecontroller");


const router = express.Router();

router.post('/addincome' , addIncome)



module.exports = router;