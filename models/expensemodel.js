const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema(
  {
    Amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    purpose: {
        type: String,
        required: true,
      },
    category: {
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


module.exports = mongoose.model("Expense", expenseSchema);