import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.css']
})
export class HeaderSearchComponent implements OnInit {

  keyword = 'Title';

  data = [
    {
      Title: "Test",
      Year : 2004
    },
    {
      Title: "Test1",
      Year : 2005
    },
    {
      Title: "Test2",
      Year : 2006
    }
  ];
  errorMsg: string;
  isLoadingResult: boolean;

  constructor(
    private headerService : HeaderService
  ) { }

  ngOnInit() {
  }

  getServerResponse(event) {

    this.isLoadingResult = true;

    this.headerService.getSearchResult(event)
      .subscribe(data => {
        if (data['Search'] == undefined) {
          this.data = [];
          this.errorMsg = data['Error'];
        } else {
          this.data = data['Search'];
        }

        this.isLoadingResult = false;
      },
      (err) => {
        this.isLoadingResult = false;
      });
  }

  searchCleared() {
    console.log('searchCleared');
    this.data = [];
  }

  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }

}
