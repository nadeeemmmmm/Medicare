import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { PlaceOrder } from '../shipping';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {

  order=new PlaceOrder();
  message:any;
  
  constructor(private service:ConnectService) { }

  ngOnInit(): void {
  }

  saveAddress(){
    let response=this.service.addAddress(this.order);
    response.subscribe((data)=>this.message=data);
  }
}
