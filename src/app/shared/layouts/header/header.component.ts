import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  departmentMenu : any;
  constructor(private headerService:HeaderService) { }

  ngOnInit() {
    this.headerService.getHeaderDepartments().subscribe((res:any) => {
       this.departmentMenu = [...res];
    })
  }

}
