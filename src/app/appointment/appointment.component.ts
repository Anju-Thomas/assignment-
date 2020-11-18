import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
appoinmentform=new FormGroup({
  firstname:new FormControl("")
  lastname:new FormControl("")
  email:new FormControl("")
})
save(){
  console.log(this.studentform.value)
}
}
