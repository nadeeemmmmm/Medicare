import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 message:any;
  
  admin = new Admin();
  data:any;

  constructor(private service:ConnectService) { }

  ngOnInit():void{
  }

  register(){
    //console.log("Register : " + JSON.stringify(this.admin) )
    let response=this.service.doRegistration(this.admin);
    response.subscribe((data)=>this.message=data);
  }

}
