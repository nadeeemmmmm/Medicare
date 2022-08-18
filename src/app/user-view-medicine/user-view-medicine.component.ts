import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ConnectService } from '../connect.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-user-view-medicine',
  templateUrl: './user-view-medicine.component.html',
  styleUrls: ['./user-view-medicine.component.css']
})
export class UserViewMedicineComponent implements OnInit {

  medicine= new Medicine();
  id:number=0;
  
  constructor(private service:ConnectService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getMedicineById(this.id).subscribe(data=>{
      this.medicine=data
    });
  }

}
