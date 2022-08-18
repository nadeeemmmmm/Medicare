import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectService } from '../connect.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-user-view-by-category',
  templateUrl: './user-view-by-category.component.html',
  styleUrls: ['./user-view-by-category.component.css']
})
export class UserViewByCategoryComponent implements OnInit {

  category:string="";
  medicines:Medicine[]=[];
  medicine=new Medicine();
  message:any;
  
  constructor(private service:ConnectService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.category=this.route.snapshot.params['category'];
    this.service.getByCategory(this.category).subscribe(data=>this.medicines=data);
  }

  getMedicineByName(){
    this.router.navigate(['/userViewByName',this.medicine]);
  }

  viewMedicineDetails(id:number){
    this.router.navigate(['/userViewMedicine',id]);
  }

  goToCart(id:number){
    let response=this.service.addTocart(id);
    response.subscribe((data)=>this.message=data);
  }
}
