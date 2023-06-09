const express = require("express");
const addExpense = require("../controller/expensecontroller");


const router = express.Router();

router.post('/addexpense' , addExpense)



module.exports = router;