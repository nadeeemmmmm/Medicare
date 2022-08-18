import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { User } from '../user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user=new User();
  message:any;

  constructor(private service:ConnectService) { }

  ngOnInit(): void {
  }

  resetLogin(){
    this.service.loginReset(this.user).subscribe(data=>this.message=data);
  }
}
