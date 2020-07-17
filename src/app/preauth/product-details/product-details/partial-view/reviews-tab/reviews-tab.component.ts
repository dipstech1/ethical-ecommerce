import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reviews-tab',
  templateUrl: './reviews-tab.component.html',
  styleUrls: ['./reviews-tab.component.css']
})
export class ReviewsTabComponent implements OnInit {

  @Input('productReviews') productReviews;
  constructor() { }

  ngOnInit() {
  }

  getPercentage(total, given){
    let percentage = (given/total) * 100;
    return percentage.toFixed(1);
  }

  setMyStyles(total, given){
    let percentage = this.getPercentage(total,given);
    percentage = percentage + "%";
    let styles = {
      'width': percentage
    };
    return styles;
  }

}
