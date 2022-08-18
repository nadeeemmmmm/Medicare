import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user=new User();
  message:any;

  constructor(private service:ConnectService, private route:Router) { }

  ngOnInit(): void {
  }

  authenticate(){
    if(this.message){
      this.route.navigate(['/userViewProducts']);
    }
    else{
      this.route.navigate(['/home']);
    }
  }

  userLogin(){
    let response=this.service.loginUser(this.user);
    response.subscribe((Boolean)=>this.message=Boolean);
    this.authenticate();
  }
}
