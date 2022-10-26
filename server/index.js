const express =  require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
// require('dotenv').config()
var Razorpay = require('razorpay');

// app.use(express.static("public"));

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors({origin:true, credentials:true}));

var instance = new Razorpay({ key_id: 'rzp_test_1XRg5lTkvXotFS', key_secret: 'GAwKMBuyYR1f7gPVxMaGJVCS' })

// instance.orders.create({
//   amount: 50000,
//   currency: "INR",
//   receipt: "receipt#1",
//   notes: {
//     key1: "value3",
//     key2: "value2"
//   }
// })

app.post('/razorPayOrder',(req,res,next)=>{
    // console.log(req.body.data.name)
    // res.json({message:'hi'})
    var options ={
        amount:req.body.data.amount  * 1000,
        currency:'INR',
        receipt:'Order123',
        payment_capture: 0
    };
    instance.orders.create(options,(err,order)=>{
        if(err){
            console.log(err);
            next(err)
        }
        if(order){
            res.json({success:true, status:'ordercreated successfully', value:order, key:'rzp_test_1XRg5lTkvXotFS'})
        }
    })
})

// app.post('/order',(req,res)=>{
//     console.log(req.body.data)
// })

app.listen(PORT, console.log(
    `Server started on port ${PORT}`));