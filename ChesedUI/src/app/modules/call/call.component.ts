import { Component, OnInit } from '@angular/core';
import Sortable from 'sortablejs';

declare function customSelectDropdown(): any;
declare function draggableSort(): any;
declare function chesedFileUpload(): any;

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    customSelectDropdown();
    draggableSort();
    chesedFileUpload();
  }

}
