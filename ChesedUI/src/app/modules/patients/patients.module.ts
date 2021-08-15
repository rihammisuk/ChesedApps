import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsComponent } from './patients.component';
import { PatientsRoutingModule } from './patients-routing.module';


@NgModule({
  declarations: [
    PatientsComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
