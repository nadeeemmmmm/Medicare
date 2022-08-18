import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-admin-view-products',
  templateUrl: './admin-view-products.component.html',
  styleUrls: ['./admin-view-products.component.css']
})
export class AdminViewProductsComponent implements OnInit {

  medicines : Medicine[]= [];
  medicine=new Medicine();

  constructor(private service:ConnectService,private router:Router) { }

  ngOnInit(): void {
    this.getAllMedicine();
  }

  private getAllMedicine(){
    this.service.getMedicine().subscribe(data=>{
      this.medicines=data
    });
  }

  updateMedicine(id:number){
    this.router.navigate(['/adminUpdateProducts',id]);
  }

  viewMedicine(id:number){
    this.router.navigate(['/adminViewMedicine',id]);
  }

  deleteMedicine(id:number){
    this.service.deleteMedicineById(id).subscribe(data=>{
      this.medicines=data
    });
  }

  getMedicineByCategory(){
    this.router.navigate(['/adminMedicineByCategory',this.medicine]);
  }

  getMedicineByName(){
    this.router.navigate(['/adminViewByname',this.medicine]);
  }
}
