import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-user-view-products',
  templateUrl: './user-view-products.component.html',
  styleUrls: ['./user-view-products.component.css']
})
export class UserViewProductsComponent implements OnInit {

  medicines : Medicine[]= [];
  medicine=new Medicine();
  message:any;

  constructor(private service:ConnectService,private router:Router) { }

  ngOnInit(): void {
    this.getAllMedicine();
  }

  private getAllMedicine(){
    this.service.getMedicine().subscribe(data=>{
      this.medicines=data
    });
  }

  viewMedicineDetails(id:number){
    this.router.navigate(['userViewMedicine',id]);
  }

  getMedicineByCategory(){
    this.router.navigate(['/userViewByCategory',this.medicine]);
  }

  getMedicineByName(){
    this.router.navigate(['/userViewByName',this.medicine]);
  }

  goToCart(id:number){
    let response=this.service.addTocart(id);
    response.subscribe((data)=>this.message=data);
  }
}
