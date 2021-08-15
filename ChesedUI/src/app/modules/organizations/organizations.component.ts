import { Component, OnInit } from '@angular/core';

declare function organizations_ag_Grid(): any;

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    organizations_ag_Grid();
  }

}
