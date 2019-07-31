
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { AppserviceService } from '../../appservice.service';
import { addEmployee } from '../../addemployee';
import { HttpClient } from '@angular/common/http';
import {approvallistvalues  } from 'src/app/viewapprovallistvalues';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.scss']
})
export class ApprovalsComponent implements OnInit {
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
    this.appservice.viewApprovals();
  }


}
