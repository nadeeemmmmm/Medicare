import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.css']
})
export class NewAdminComponent implements OnInit {

  admin= new Admin();
  message:any;

  constructor(private service:ConnectService) { }

  ngOnInit(): void {
  }

  updateAdmin(){
    this.service.doAdminUpdate(this.admin).subscribe(data=>{
      this.message=data
    });
  }
}
