import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin=new Admin;
  output:any;
  constructor(private service:ConnectService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.output){
      //console.log(true);
      this.router.navigate(['/adminViewProducts']);
    }
    else { 
    //console.log(false);
    this.router.navigate(['/adminLogin']);
  }
}

  onAdminLogin(){
        let res=this.service.doLogin(this.admin);
        res.subscribe((Boolean)=>this.output=Boolean);
        this.login();
  }
}
