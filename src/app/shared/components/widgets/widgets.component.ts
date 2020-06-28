import { Component, OnInit ,Input,OnChanges} from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit,OnChanges {
  // tslint:disable-next-line: no-input-rename
  @Input('sellers') sellers;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(): void {
  }


}
