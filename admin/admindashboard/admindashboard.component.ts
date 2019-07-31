import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { AppserviceService } from '../../appservice.service';
import { userStatusUpDate } from '../.././userstatusupdate';
import { managerStatusUpDate } from '../.././managerstatusupdate';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})

export class AdmindashboardComponent implements OnInit {
  descending: boolean;
  searchText: any;
  managersearchText: any;
  p: number = 1;
  page: number = 1;

  progressBar: any;
  viewc = sessionStorage.getItem('userId');
  dashboardvaluse = this.appservice.rootUrl;
  userstatus: any;
  managerstatus: any;
  // displayedColumns: string[] = ['Id', 'Name', 'Weeks', 'Action'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor(private http: HttpClient, private appservice: AppserviceService, private toastr: ToastrService) {

  }
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {

    // this.dataSource.paginator = this.paginator;
  }
  user = this.http.get(this.dashboardvaluse + '/proClock/userStatusReport/' + this.viewc).subscribe((res: Response) => {
    this.userstatus = res;
  });

  manager = this.http.get(this.dashboardvaluse + '/proClock/managerStatusReport/' + this.viewc).subscribe((res: Response) => {
    this.managerstatus = res;
  });

  managerSubmit(element) {
    this.progressBar = true;
    // sessionStorage.setItem('managerId', element.managerId);
    // sessionStorage.setItem('noOfWeeks', element.noOfWeeks);
    // sessionStorage.setItem('employeeName', element.employeeName);
    // var manageruid = sessionStorage.getItem('managerId');
    // var noofweeks = sessionStorage.getItem('noOfWeeks');
    // var employeename = sessionStorage.getItem('employeeName');
    const managerstatusupdate: managerStatusUpDate = {
      id: element.managerId,
      noOfWeeks: element.noOfWeeks,
      employeeName: element.employeeName,
    }
    console.log(element.managerId + element.noOfWeeks + element.employeeName);
    this.appservice.managerSendReminder(managerstatusupdate)
      .subscribe(res => {
        if (this.appservice.managerreminderdetails.statusCode == "000") {
          this.progressBar = false;
          this.toastr.success('Sent reminder successfully');
        } else if (this.appservice.managerreminderdetails.statusCode == "500") {
          this.progressBar = false;
          this.toastr.error(this.appservice.managerreminderdetails.statusMsg);
        } else {
          this.progressBar = false;
          this.toastr.error('Sent reminder unsuccessfully');
        }
      })
  }
  userSubmit(element) {
    this.progressBar = true;
    // sessionStorage.setItem('userId', element.userId);
    // sessionStorage.setItem('noOfWeeks', element.noOfWeeks);
    // var userid = sessionStorage.getItem('userId');
    // var noOofweeks = sessionStorage.getItem('noOfWeeks');
    const userstatusupdate: userStatusUpDate = {
      id: element.userId,
      noOfWeeks: element.noOfWeeks,
    }

    debugger;
    console.log(element.userId + element.noOfWeeks + element.employeeName);
    this.appservice.userSendReminder(userstatusupdate)
      .subscribe(res => {
        if (this.appservice.userreminderdetails.statusCode == "000") {
          this.progressBar = false;
          this.toastr.success('Sent reminder successfully');
        } else if (this.appservice.userreminderdetails.statusCode == "500") {
          this.progressBar = false;
          this.toastr.error(this.appservice.userreminderdetails.statusMsg);
        } else {
          this.progressBar = false;
          this.toastr.success('Sent reminder unsuccessfully');
        }
      })
  }


}


