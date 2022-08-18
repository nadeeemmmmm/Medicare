import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../cart';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  carts:Cart[]=[];

  constructor(private service:ConnectService,private router:Router) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  private getCartItems(){
    this.service.getUserCart().subscribe(data=>this.carts=data);
  }

  viewMedicineDetails(id:number){
    this.router.navigate(['userViewMedicine',id]);
  }

  deleteItemFromCart(orderId:number){
    this.service.deleteCartItem(orderId).subscribe(data=>this.carts=data);
    this.router.navigate(['/userCart']);
  }

  checkOut(){
    this.router.navigate(['/shippingAddress']);
  }

  addMoreItems(){
    this.router.navigate(['/userViewProducts']);
  }

}
