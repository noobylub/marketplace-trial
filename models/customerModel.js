import mongoose from "mongoose";

let customerSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  favoriteItem: String,
});

const Customer =
mongoose.models.Customer||
mongoose.model("Customer", customerSchema, "CustomerCollection") 
 

export default Customer;
