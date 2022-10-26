import { Component } from '@angular/core';
import { DataService } from './data.service';

declare var Razorpay:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(private data:DataService) {}
  items ={
    name:'electronics',
    amount: 800,
    email:'harishkumark05@gmail.com'
  }

razorPayOptions =  {
  "key":'',
  "amount":'',
  "currency":'INR',
  "name":'',
  "description":'Electronics',
  "order_id":'',
  "handler":(res:any)=>{
    console.log(res);
  }
}




  payOnline(){
 this.data.razorPayOrder(this.items).subscribe((res:any) =>{
  // console.log(res);
  this.razorPayOptions.key = res['key'];
  this.razorPayOptions.amount = res['amount'];
  this.razorPayOptions.name = res['name'];
  this.razorPayOptions.order_id = res['value']['id']
  // this.razorPayOptions.handler = this.razorPayResponseHandler
  var rzp1 = new Razorpay(this.razorPayOptions);
  rzp1.open();
  console.log('opened')
})
  }
  razorPayResponseHandler(response:any){
    console.log(response);
  }
  orderId(){
    this.data.order('order_KYO9hrrZe71ran').subscribe((data:any)=>{
      console.log(data)
    })
  }
}
