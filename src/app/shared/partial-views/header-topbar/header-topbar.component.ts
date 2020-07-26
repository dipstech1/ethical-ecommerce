import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data-sharing.service';

@Component({
  selector: 'app-header-topbar',
  templateUrl: './header-topbar.component.html',
  styleUrls: ['./header-topbar.component.css']
})
export class HeaderTopbarComponent implements OnInit {
  wishList: any[];

  constructor(private dataSharingService : DataService) { }

  ngOnInit() { 
    this.dataSharingService.wishData$.subscribe((wishlst:any) => {
      console.log('wishlst ', wishlst)
      this.wishList = wishlst.length;
      
    })
  }

}
