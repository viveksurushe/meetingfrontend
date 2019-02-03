import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// form module
import { FormsModule } from '@angular/forms';

//calenser module
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
@NgModule({
  declarations: [MemberDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    RouterModule.forChild([
      {path:'mDashboard',component:MemberDashboardComponent}
    ])
  ],
  exports: [
    MemberDashboardComponent
 ]
})
export class MemberModule { }
