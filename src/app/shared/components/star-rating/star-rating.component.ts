import { Component, OnInit, Input } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingsComponent implements OnInit {

  @Input() rating;

  constructor() { }

  ngOnInit() {
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    console.log(`Old Value:${$event.oldValue}, 
    New Value: ${$event.newValue}, 
    Checked Color: ${$event.starRating.checkedcolor}, 
    Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
