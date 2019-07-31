import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { addManager } from '../../addmanager';
import { AppserviceService } from '../../appservice.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { updateManager } from '../../updateManager';
import {UpdatemanagerComponent} from './updatemanager/updatemanager.component';
import {AddnewmanagerComponent} from './addnewmanager/addnewmanager.component';

import {Observable} from 'rxjs/Rx';
export interface managersedit {
  managerId: string;
  managerName: string;
  managerEmail: string;
  auth: string;
  action: string;
  companyId: string;
  projectId: string;
}

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss']
})
export class ManagersComponent implements OnInit {
  descending:boolean;
  selectedOption:any;
  searchText:any;
  p:number = 1;
  viewmanagersadmin: managersedit;
  dashboardvaluse = this.appservice.rootUrl;
  projectid = +sessionStorage.getItem('projectId');
  managerlist: any;
  dataSource:any;
  // managerlist=this.appservice.viewManagersList;
  projectduration = sessionStorage.getItem('projectDuration');
  projectname = sessionStorage.getItem('projectName');
  projectstartDate = sessionStorage.getItem('projectStartDate');

  displayedColumns: any[] = ['managerId', 'managerName', 'managerEmail', 'projectVendor', 'auth', 'Action'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog, public appservice: AppserviceService) {
  }
  ngOnInit() { 
   // this.appservice.viewManagers().subscribe(data => this.managerlist = data);
     this.dataSource = new MatTableDataSource<managersedit>(this.managerlist);
    this.dataSource.data = this.managerlist;
    this.dataSource.paginator = this.paginator;
    this.appservice.viewManagers();
    // this.manager();
      let timer = Observable.timer();
      timer.subscribe(() => this.appservice.viewManagers());
  }

//   manager(){ 
//     this.http.get(this.dashboardvaluse + '/proClock/viewManagers/' + this.projectid).subscribe((res: Response) => {
//     this.managerlist = res;

//   });
// }
  employeeview(viewmanagervalues: managersedit) {
    this.viewmanagersadmin = viewmanagervalues;
    sessionStorage.setItem('managerId', viewmanagervalues.managerId);
    sessionStorage.setItem('managerName', viewmanagervalues.managerName);
    sessionStorage.setItem('managerEmail', viewmanagervalues.managerEmail);
    //this.appservice.viewManagers();
  };
  managers(updatemanagervalues: managersedit) {
    this.viewmanagersadmin = updatemanagervalues;
    sessionStorage.setItem('managerId', updatemanagervalues.managerId);
    sessionStorage.setItem('managerName', updatemanagervalues.managerName);
    sessionStorage.setItem('managerEmail', updatemanagervalues.managerEmail);
    sessionStorage.setItem('isAuth', updatemanagervalues.auth);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddnewmanagerComponent, {
      disableClose: true,
      width: '50%',
    });
  }
  openEditDialog(): void {
    const dialogRef = this.dialog.open(UpdatemanagerComponent, {
      disableClose: true,
      width: '50%',
    });
  }
}

