import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectService } from '../connect.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-user-view-by-name',
  templateUrl: './user-view-by-name.component.html',
  styleUrls: ['./user-view-by-name.component.css']
})
export class UserViewByNameComponent implements OnInit {

  medicine= new Medicine();
  name:string="";
  message:any;

  constructor(private service:ConnectService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name'];
    this.service.getByName(this.name).subscribe(data=>{
      this.medicine=data
    });
  }

  goToCart(id:number){
    let response=this.service.addTocart(id);
    response.subscribe((data)=>this.message=data);
  }

}
