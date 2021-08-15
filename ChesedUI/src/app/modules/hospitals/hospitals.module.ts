import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalsComponent } from './hospitals.component';
import { HospitalsRoutingModule } from './hospitals-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { Module } from 'ag-grid-community';


@NgModule({
  declarations: [
    HospitalsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HospitalsRoutingModule,
    AgGridModule.withComponents([]),
  ]
})
export class HospitalsModule { 
}
