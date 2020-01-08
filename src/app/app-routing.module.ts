import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { ReportsComponent } from './components/reports/reports.component';
import { PrimengComponent } from './components/primeng/primeng.component';
const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },
  {
    path:'admin/view/:id',
    component : ViewRegistrationComponent
  },
  {
    path:'admin',
    component : AdminComponent
  } ,
   {
    path:'reports',
    component : ReportsComponent
  },
  {
    path:'primeng',
    component : PrimengComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
