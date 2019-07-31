import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { addProject } from '../../addproject';
import { AppserviceService } from '../../appservice.service';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { updateProject } from '../../updateProject';
import {UpadateprojectComponent} from './upadateproject/upadateproject.component';
import {AddnewprojectComponent} from './addnewproject/addnewproject.component';

export interface projectsedit {
  projectId: string;
  projectName: string;
  projectCode: string;
  projectVendor: string;
  projectStartDate: string;
  projectDuration: string;
  description: string;
  action: string;
  companyName: string;
  companyAddress: string;
  companyId: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit { 
  descending:boolean;
  searchText:any;
  p:number = 1;
  viewprojectsadmin: projectsedit;
  dataSource: any;
  projectlist: any;
  dashboardvaluse = this.appservice.rootUrl;
  companyid = +sessionStorage.getItem('companyId');
  b = sessionStorage.getItem('companyName');
  c = sessionStorage.getItem('companyAddress');
  displayedColumns: string[] = ['projectId', 'projectName', 'projectCode', 'projectVendor', 'projectStartDate', 'projectDuration', 'description', 'Action'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog, public appservice: AppserviceService) {

  }
//   project(){ this.http.get(this.dashboardvaluse + '/proClock/viewProjects/' + this.companyid).subscribe((res: Response) => {
//     this.projectlist = res;

//   });
// }
ngOnInit() {
  this.appservice.viewProjects();
  //this.appservice.viewProjects().subscribe(data => this.projectlist = data);
  this.dataSource = new MatTableDataSource<projectsedit>(this.projectlist);
  this.dataSource.data = this.projectlist;
  this.dataSource.paginator = this.paginator;

    //  let timer = Observable.timer();
    //  timer.subscribe(() => this.appservice.viewProjects());
 
}

  managerview(viewcompanyvalues: projectsedit) {
    this.viewprojectsadmin = viewcompanyvalues;
    sessionStorage.setItem('projectId', viewcompanyvalues.projectId);
    sessionStorage.setItem('projectDuration', viewcompanyvalues.projectDuration);
    sessionStorage.setItem('projectName', viewcompanyvalues.projectName);
    sessionStorage.setItem('projectStartDate', viewcompanyvalues.projectStartDate);
    this.appservice.viewManagers();
  };
  receipt(updateprojectvalues: projectsedit) {
    this.viewprojectsadmin = updateprojectvalues;
    sessionStorage.setItem('projectId', updateprojectvalues.projectId);
    sessionStorage.setItem('projectName', updateprojectvalues.projectName);
    sessionStorage.setItem('projectStartDate', updateprojectvalues.projectStartDate);
    sessionStorage.setItem('projectDuration', updateprojectvalues.projectDuration);
    sessionStorage.setItem('projectVendor', updateprojectvalues.projectVendor);
    sessionStorage.setItem('projectCode', updateprojectvalues.projectCode);
    sessionStorage.setItem('description', updateprojectvalues.description);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddnewprojectComponent, {
      width: '50%',
      disableClose: true,
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(UpadateprojectComponent, {
      disableClose: true,
      width: '50%',
    });
  }
}

  