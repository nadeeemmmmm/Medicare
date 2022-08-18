import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectService } from '../connect.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-admin-medicine-by-category',
  templateUrl: './admin-medicine-by-category.component.html',
  styleUrls: ['./admin-medicine-by-category.component.css']
})
export class AdminMedicineByCategoryComponent implements OnInit {

  category:string="";
  medicines:Medicine[]=[];
  medicine=new Medicine();

  constructor(private service:ConnectService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.category=this.route.snapshot.params['category'];
    this.service.getByCategory(this.category).subscribe(data=>this.medicines=data);
  }

  getMedicineByName(){
    this.router.navigate(['/adminViewByname',this.medicine]);
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
    this.router.navigate(['/adminMedicineByCategory']);
  }

}
