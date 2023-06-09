const expensemodel = require("../models/expensemodel")

// create Product
const addExpense = async (req, res) => {
    try {
      const payload =
        req.body;
      
      //validation
        if (!payload.Amount){
            return res.status(500).send({ error: "Amount is Required" });
        }
        if (!payload.category ) {
            return res.status(500).send({ error: "Category is Required" });
        }
        if (!payload.purpose ) {
            return res.status(500).send({ error: "Purpose is Required" });
        }
        if (!payload.description) {
            return res.status(500).send({ error: "Description is Required" });
        }
       
        if (!payload.date ) {
            return res.status(500).send({ error: "Date is Required" });
        }
        
  
    const expense = new expensemodel( payload) ;
     
      await expense.save();
      res.status(201).send({
        success: true,
        message: "Expense Added Successfully",
        expense,
      });
    } catch (error) {
      console.log({"error ": error});
      res.status(500).send({
        success: false,
        error,
        message: "Error in Adding Expense",
      });
    }
  };


module.exports = addExpense