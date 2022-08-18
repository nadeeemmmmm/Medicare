import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectService } from '../connect.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-admin-update-product',
  templateUrl: './admin-update-product.component.html',
  styleUrls: ['./admin-update-product.component.css']
})
export class AdminUpdateProductComponent implements OnInit {

  medicine = new Medicine();
  id:number=0;
  message:any;

  constructor(private service:ConnectService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getMedicineById(this.id).subscribe(data=>{
      this.medicine=data
    });
  }

  updateMedicine(){
    let res=this.service.updateMedicineById(this.medicine);
    res.subscribe((data)=>this.message=data);
  }
}
