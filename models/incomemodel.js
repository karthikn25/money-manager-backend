const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema(
  {
    Amount: {
      type: Number,
      required: true,
    },
    
    description: {
      type: String,
      required: true,
    },
    date: {
        type: Date,
        required: true,
      },
      
    },
  { timestamps: true }
);


module.exports = mongoose.model("Incomes", incomeSchema);