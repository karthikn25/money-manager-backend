const incomemodel = require("../models/incomemodel")

// create Product
const addIncome = async (req, res) => {
    try {
      const payload =
        req.body;
      
      //validation
        if (!payload.Amount){
            return res.status(500).send({ error: "Amount is Required" });
        }
        if (!payload.description) {
            return res.status(500).send({ error: "Description is Required" });
        }
        if (!payload.date ) {
            return res.status(500).send({ error: "Date is Required" });
        }
        
  
    const income = new incomemodel( payload) ;
     
      await income.save();
      res.status(201).send({
        success: true,
        message: "Income Added Successfully",
        income,
      });
    } catch (error) {
      console.log({"error ": error});
      res.status(500).send({
        success: false,
        error,
        message: "Error in Adding income",
      });
    }
  };


module.exports = addIncome
