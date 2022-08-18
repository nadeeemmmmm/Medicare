import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { User } from '../user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user=new User();
  message:any;

  constructor(private service:ConnectService) { }

  ngOnInit(): void {
  }

  userRegister(){
    this.service.registerUser(this.user).subscribe(data=>this.message=data);
  }
}
