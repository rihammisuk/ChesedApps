import { Hospital } from './../../models/hospital';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalService } from 'src/app/services/hospitalService';
import { PaginationDTO } from 'src/app/models/PaginationDTO';

// declare function hospitals_ag_Grid(): any;

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {





hospitalCode:string;
pagination = new PaginationDTO();
rowModelType = 'serverSide';
serverSideStoreType = 'partial';
columnDefs = [
  { headerName: "Hospital Code", field: "hospitalCode" },
  { headerName: "Description", field: "description" },
  { headerName: "Address", field: "address"  },
  { headerName: "City", field: "city"  },
  { headerName: "State", field: "state" },
  { headerName: "ZIP", field: "zip"  },
  { headerName: "Area", field: "area"  },
  { headerName: "Main Phone", field: "mainPhone"  },
  { headerName: "ER Phone", field: "erPhone"  },
  { headerName: "Contact Person", field: "contactPerson"  }
];
rowData: Observable<Hospital[]> | undefined;
defaultColDef = {
  sortable: true,
  resizable: true,
};

constructor(private hospitalService:HospitalService) { }

ngOnInit(): void {
  // hospitals_ag_Grid();
  this.rowData = this.hospitalService.GetAllHospital();
  
}


onFilterTextBoxChanged(hospitalCode?:string)
{

  if(hospitalCode==null || hospitalCode== ''|| hospitalCode.length == 0 )
  {
    this.rowData = this.hospitalService.GetAllHospital();
  }
  else
  {
    this.rowData = this.hospitalService.GetHospitalFilter(hospitalCode);
  }
}
}