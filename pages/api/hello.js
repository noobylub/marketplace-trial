// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "../../utils/connectMongo";
import CustomerModel from "../../models/CustomerModel";

export default async function  handler (req, res) {
  const {Names, FavoriteItems} = req.body; 
  await connectMongo(); 

  let newCustomer = new CustomerModel({name : Names, favoriteItem: FavoriteItems }); 
  newCustomer.save()

  res.status(200).send({ name: 'John Doe' })
}
