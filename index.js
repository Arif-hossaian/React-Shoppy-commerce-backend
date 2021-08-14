import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
//import SSLCommerzPayment from "sslcommerz-lts";
import defaultData from "./defaultData.js";
import Routes from "./routes/route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// const store_id = 'testbox&'
// const store_passwd = 'qwerty&'
// const is_live = false 

app.use("/", Routes);
// app.get('/init', (req, res) => {
//   const data = {
//     total_amount: 100,
//     currency: 'BDT',
//     tran_id: 'REF123', // use unique tran_id for each api call
//     success_url: 'http://localhost:8000/success',
//     fail_url: 'http://localhost:8000/fail',
//     cancel_url: 'http://localhost:8000/cancel',
//     ipn_url: 'http://localhost:8000/ipn',
//     shipping_method: 'Courier',
//     product_name: 'Computer.',
//     product_category: 'Electronic',
//     product_profile: 'general',
//     cus_name: 'Customer Name',
//     cus_email: 'customer@example.com',
//     cus_add1: 'Dhaka',
//     cus_add2: 'Dhaka',
//     cus_city: 'Dhaka',
//     cus_state: 'Dhaka',
//     cus_postcode: '1000',
//     cus_country: 'Bangladesh',
//     cus_phone: '01711111111',
//     cus_fax: '01711111111',
//     ship_name: 'Customer Name',
//     ship_add1: 'Dhaka',
//     ship_add2: 'Dhaka',
//     ship_city: 'Dhaka',
//     ship_state: 'Dhaka',
//     ship_postcode: 1000,
//     ship_country: 'Bangladesh',
// };
// const sslcommer = new SSLCommerzPayment('testbox', 'qwerty',true) //true for live default false for sandbox
//     sslcommer.init(data).then(data => {
//         //process the response that got from sslcommerz 
//         //https://developer.sslcommerz.com/doc/v4/#returned-parameters
//         if(data?.GatewayPageURL){
//           return res.status(200).redirect(data?.GatewayPageURL)
//         }else{
//           return res.status(400).json({msg: "error"})
//         }
//     });
// })


const CONNECTION_URL = process.env.MONGODB_URL;
mongoose
  .connect(CONNECTION_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => console.log(`${error} did not connect`));
mongoose.set("useFindAndModify", false);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port:- ${PORT}`);
});
//default data
defaultData();
