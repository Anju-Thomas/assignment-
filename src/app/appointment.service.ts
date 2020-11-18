import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { getData } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }
}
getData(){
  return this.http.get("http://localhost:4200/assets/appointment.json")
}