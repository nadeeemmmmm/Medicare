import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { Medicine } from './medicine';
import { PlaceOrder } from './shipping';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private http:HttpClient) { }

                                                               // ADMIN SERVICES.
  public doRegistration(admin:any){ 
    const headers={'content-type':'application/json'};
    //console.log("Do registration" + JSON.stringify(admin));
    //console.log(admin)
    return this.http.post("http://localhost:8080/insertAdmin",admin,{responseType:'text' as 'json','headers':headers});
  }

  public doLogin(admin:any){
    const headers={'content-type':'application/json'};
    return this.http.post("http://localhost:8080/adminLogin",admin,{'headers':headers});
  }

  public doAdminUpdate(admin:any){
    const headers={'content-type':'application/json'};
    return this.http.put("http://localhost:8080/updateAdmin",admin,{responseType:'text' as 'json','headers':headers});
  }

  public insertMedicine(medicine:any){
    const headers={'content-type':'application/json'};
    return this.http.post("http://localhost:8080/enterDetails",medicine,{responseType:'text' as 'json','headers':headers});
  }

  public getMedicine():Observable<Medicine[]>{
    return this.http.get<Medicine[]>("http://localhost:8080/getDetails");
  }

  public updateMedicineById(medicine:any){
    const headers={'content-type':'application/json'};
    return this.http.put("http://localhost:8080/updateDetails",medicine,{responseType:'text' as 'json','headers':headers});
  }

  public deleteMedicineById(id:number):Observable<Medicine[]>{
    return this.http.delete<Medicine[]>("http://localhost:8080/deleteDetails/"+id);
  }

  public getMedicineById(id:number):Observable<Medicine>{
    return this.http.get<Medicine>("http://localhost:8080/getdetailsById/"+id);
  }

  public getByCategory(category:string):Observable<Medicine[]>{
    return this.http.get<Medicine[]>("http://localhost:8080/getByCategory/"+category);
  }

  public getByName(name:string):Observable<Medicine>{
    return this.http.get<Medicine>("http://localhost:8080/getByName/"+name);
  }

                                          //  USER SERVICES.
  public registerUser(user:any){
    const headers={'content-type':'application/json'};
    return this.http.post("http://localhost:8080/registerUser",user,{responseType:'text' as 'json','headers':headers});
  } 
  
  public loginUser(user:any){
    const headers={'content-type':'application/json'};
    return this.http.post("http://localhost:8080/loginUser",user,{'headers':headers});
  }

  public loginReset(user:any){
    const headers={'content-type':'application/json'};
    return this.http.put("http://localhost:8080/updateUser",user,{responseType:'text' as 'json','headers':headers});
  }

  public addTocart(id:number){
    return this.http.get("http://localhost:8080/addMedicineById/"+id,{responseType:'text'});
  }

  public getUserCart():Observable<Cart[]>{
    return this.http.get<Cart[]>("http://localhost:8080/Cart");
  }

  public deleteCartItem(orderId:number):Observable<Cart[]>{
    return this.http.delete<Cart[]>("http://localhost:8080/updatedUserCart/"+orderId);
  }

  public addAddress(order:any){
    const headers={'content-type':'application/json'};
    return this.http.put("http://localhost:8080/placeOrder",order,{responseType:'text' as 'json','headers':headers});
  }

  public findAddress():Observable<PlaceOrder[]>{
    return this.http.get<PlaceOrder[]>("http://localhost:8080/getAddress");
  }
}
