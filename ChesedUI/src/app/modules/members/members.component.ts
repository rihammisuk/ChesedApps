import { Component, OnInit } from '@angular/core';

declare function customSelectDropdown(): any;
declare function members_ag_Grid(): any;

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    customSelectDropdown();
    members_ag_Grid();
  }

}
