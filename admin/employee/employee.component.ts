import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { AppserviceService } from '../../appservice.service';
import { addEmployee } from '../../addemployee';
import { HttpClient } from '@angular/common/http';
import { addCompany } from 'src/app/addcompany';
import {Observable} from 'rxjs/Rx';
import {AddnewemployeeComponent}from './addnewemployee/addnewemployee.component';
export class PeriodicElement {
  companyId: string;
  companyName: string;
  companyAddress: string;
  userId: number;
  action: string;
}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  descending:boolean;
  searchText:any;
  p:number = 1;
  dashboardvaluse = this.appservice.rootUrl;
  dashboard = sessionStorage.getItem('userId');
  viewsheet: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private http: HttpClient, public dialog: MatDialog, public appservice: AppserviceService) {
  }
  ngOnInit() {
    this.appservice.viewEmployeesList();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddnewemployeeComponent, {
      width: '50%',
      disableClose: true,
    });
  }

}

 