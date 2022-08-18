import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-admin-add-products',
  templateUrl: './admin-add-products.component.html',
  styleUrls: ['./admin-add-products.component.css']
})
export class AdminAddProductsComponent implements OnInit {

  medicine = new Medicine();
  message:any;
  constructor(private service:ConnectService,private router:Router) { }

  ngOnInit(): void {
  }
  
  addMedicine(){
    let response=this.service.insertMedicine(this.medicine);
    response.subscribe((data)=>this.message=data);
  }
}
