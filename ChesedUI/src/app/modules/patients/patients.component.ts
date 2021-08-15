import { Component, OnInit } from '@angular/core';

declare function customSelectDropdown(): any;
declare function patients_ag_Grid(): any;

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    customSelectDropdown();
    patients_ag_Grid();
  }

}
