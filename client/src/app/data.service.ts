import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  razorPayOrder(data:any){
    return this.http.post('http://localhost:3000/razorPayOrder',{data})
  }
  order(data:string){
    return this.http.get(`https://api.razorpay.com/v1/orders/${data}`)
  }
}
