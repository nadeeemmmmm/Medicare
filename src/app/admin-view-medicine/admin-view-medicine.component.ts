import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectService } from '../connect.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-admin-view-medicine',
  templateUrl: './admin-view-medicine.component.html',
  styleUrls: ['./admin-view-medicine.component.css']
})
export class AdminViewMedicineComponent implements OnInit {

  medicine= new Medicine();
  medicines:Medicine[]=[];
  id:number=0;

  constructor(private service:ConnectService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getMedicineById(this.id).subscribe(data=>{
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

