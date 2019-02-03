import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Route } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// form module
import { FormsModule } from '@angular/forms';
//toastr
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      {path:'signin',component:SigninComponent},
      {path:'signup',component:SignupComponent},
    ])
  ]
})
export class UserModule { }
