import { Component, OnInit } from '@angular/core';
//toaster sevices
import { ToastrService } from 'ngx-toastr';
import { $ } from 'protractor';
import { AppService } from 'src/app/app.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public email: String;
  public password: any;
  constructor(public toastr: ToastrService,
              public appService: AppService,
              public Router: Router ){ }

  ngOnInit() {


  }
  public signinFunction: any = () => {
    if (!this.email) {
      this.toastr.warning('Enter Correct Email Id');
    } else if (!this.password) {
      this.toastr.warning('Enter password');
    } else {
      let signinData = {
        email: this.email,
        password: this.password
      }
      console.log(signinData);
      this.appService.signinFunction(signinData).subscribe(
        (apiResponse) => {
          console.log("apires=>>",apiResponse);
          if (apiResponse.status === 200) {
            Cookie.set('authtoken', apiResponse.data.authToken);//it is jwt token
            Cookie.set('userId', apiResponse.data.userId);
            Cookie.set('firstName', apiResponse.data.firstName);
            Cookie.set('role', apiResponse.data.role);
            this.appService.setUserInfoToLocalStorage(apiResponse.data.userDetails);
            if (apiResponse.data.userDetails.role == "Admin") {
              this.Router.navigate(['/aDashboard']);
            } else {
              this.Router.navigate(['/mDashboard']);
            }
          } else {
            this.toastr.error(apiResponse.message);
          }
        },
        (err) => {
          this.toastr.error(err);
        }
      )
    }

  }

}
