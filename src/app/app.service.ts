import { Injectable } from '@angular/core';
//observable
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = 'http://localhost:3000';
  
  constructor(public http: HttpClient) { }

  public setUserInfoToLocalStorage(data){
    localStorage.setItem('userInfo', JSON.stringify(data));
  }//setUserInfo end here

  public getUserInfoFromLocalStorage(){
    return JSON.parse(localStorage.getItem('userInfo'));
  }//end of the GetUserINfo fron local storage


  public signupFunction(data): Observable<any>{
    const params = new HttpParams()
    .set("firstName",data.firstName)
    .set("lastName",data.lastName)
    .set("email",data.email) 
    .set("phone",data.phone)
    .set("role",data.role)
    .set("password",data.password);
    console.log(params);
    console.log("inservice");
    return this.http.post(`${this.url}/api/v1/users/signup`,params);
  }// end of th e signup function
  
  public signinFunction(data):Observable<any>{
    const params = new HttpParams()
    .set("email",data.email)
    .set("password",data.password);
    console.log(params);
    return this.http.post(`${this.url}/api/v1/users/login`,params);
  }//login function end here
}
