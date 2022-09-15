// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "../../../utils/connectMongo";
import Customer from "../../../models/CustomerModel";
import mongoose, { connect } from "mongoose";

export default async function handler(req, res) {
  const { customer } = req.query;
  switch (customer) {
    case 'register':
      try {
        const { name } = req.body;
        await connectMongo();
        const item = new Customer({
          name,
        });
        const exist = await Customer.findOne({ name });
        if (!exist) {
          item.save();
        } else if (exist) {
          console.log("Already existed");
        }
        console.log("saved");
        res.status(200).json(item);
      } catch (err) {
        console.log(err);
      }
      break;
  }
}
