import mongoose from 'mongoose'; 

let customerSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
    favoriteItem : String
}); 

const CustomerModel = mongoose.models.test||mongoose.model('Customer', customerSchema, 'CustomerCollection'); 

export default CustomerModel; 