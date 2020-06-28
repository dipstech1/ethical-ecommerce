import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-departments-menu',
  templateUrl: './departments-menu.component.html',
  styleUrls: ['./departments-menu.component.css']
})
export class DepartmentsMenuComponent implements OnInit, OnChanges {
 

  @Input() departmentMenu;

  constructor() { }

  ngOnChanges(): void {
  }

  ngOnInit() {
  }

  

}
