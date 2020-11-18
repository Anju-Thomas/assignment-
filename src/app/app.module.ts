import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HTTPClient} from './HTTPclient';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalComponent } from './hospital/hospital.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
