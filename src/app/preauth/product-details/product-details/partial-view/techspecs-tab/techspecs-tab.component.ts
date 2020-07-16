import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataService } from 'src/app/core/services/data-sharing.service';

@Component({
  selector: 'app-techspecs-tab',
  templateUrl: './techspecs-tab.component.html',
  styleUrls: ['./techspecs-tab.component.css']
})
export class TechspecsTabComponent implements OnInit, OnChanges {

  @Input('specDetails') specDetails;

  constructor() { }

  ngOnChanges(){
  }

  ngOnInit() {
   
  }

}
