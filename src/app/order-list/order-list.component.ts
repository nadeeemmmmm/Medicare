import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../cart';
import { ConnectService } from '../connect.service';
import { PlaceOrder } from '../shipping';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  carts:Cart[]=[];
  orders:PlaceOrder[]=[];
  contact:any;

  constructor(private service:ConnectService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCart();
    this.getAddress()
  }

  private getCart(){
    this.service.getUserCart().subscribe(data=>this.carts=data);
  }

  private getAddress(){
    this.service.findAddress().subscribe(data=>this.orders=data);
  }

}
