import { BrowserModule } from '@angular/platform-browser'; 

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import {TableModule} from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BikeService } from './services/bike.service';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { ReportsComponent } from './components/reports/reports.component';
import { PrimengComponent } from './components/primeng/primeng.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    ReportsComponent,
    PrimengComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MenuModule,
    PanelModule,
    TableModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
