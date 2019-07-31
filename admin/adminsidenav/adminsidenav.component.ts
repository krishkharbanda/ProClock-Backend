import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AppserviceService } from '../../appservice.service';
@Component({
  selector: 'app-adminsidenav',
  templateUrl: './adminsidenav.component.html',
  styleUrls: ['./adminsidenav.component.scss']
})
export class AdminsidenavComponent implements OnInit {
  constructor(private appservice: AppserviceService, private router: Router) { }

  ngOnInit() {
  }
  companyview() {
    this.appservice.viewCompanies();
    //this.router.navigate(['/admincompanies']);
  }
  // employeeview(){
  //   this.appservice.viewEmployeesList();
  // }
}
