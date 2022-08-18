import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectService } from '../connect.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-admin-view-by-name',
  templateUrl: './admin-view-by-name.component.html',
  styleUrls: ['./admin-view-by-name.component.css']
})
export class AdminViewByNameComponent implements OnInit {

  medicine= new Medicine();
  medicines:Medicine[]=[];
  name:string="";

  constructor(private service:ConnectService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name'];
    this.service.getByName(this.name).subscribe(data=>{
      this.medicine=data
    });
  }

  updateMedicine(id:number){
    this.router.navigate(['/adminUpdateProducts',id]);
  }

  deleteMedicine(id:number){
    this.service.deleteMedicineById(id).subscribe(data=>{
      this.medicines=data
    });
    this.router.navigate(['/adminViewProducts']);
  }

}
