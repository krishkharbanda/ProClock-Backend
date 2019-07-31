import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { addManager } from '../../../addmanager';
import { AppserviceService } from '../../../appservice.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { updateManager } from '../../../updateManager';

import {Observable} from 'rxjs/Rx';
import { ToastrService } from 'ngx-toastr';

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
  selector: 'app-updatemanager',
  templateUrl: './updatemanager.component.html',
  styleUrls: ['./updatemanager.component.scss']
})
export class UpdatemanagerComponent implements OnInit {
  progressBar:any;
  selectedOption:any;
  updatemanager: updateManager;
  companyid = sessionStorage.getItem('companyId');
  projectid = sessionStorage.getItem('projectId');
  managerid = sessionStorage.getItem('managerId');
  b = sessionStorage.getItem('managerName');
  c = sessionStorage.getItem('managerEmail');
  d = sessionStorage.getItem('isAuth');
  constructor(
    public dialogRef: MatDialogRef<UpdatemanagerComponent>, private appservice: AppserviceService, private toastr: ToastrService) { }
  ngOnInit() {
    
    this.appservice.viewManagers();
    //this.resetForm();
  }
  upadateauthValues = [
    { user: 'false', values:0 },
    { user: 'true', values: 1 }
  ];
  // resetForm(form?: NgForm) {
  //   if (form != null)
  //     form.reset();
  //   this.updatecompany = {
  //     id:+'',
  //     companyName: '',
  //     companyAddress: ''
  //   }
  // }
  selectedauthId() {
    sessionStorage.setItem('authid', this.selectedOption.values);
  }
  onSubmitUpdate(form: NgForm) {
    this.progressBar=true;
    var projectid = sessionStorage.getItem('projectId');
    var managerid = sessionStorage.getItem('managerId');
    var managerauthid = sessionStorage.getItem('authid');
    // if (form.value.user == 'false') {
    //   var x: boolean = form.value.values
    // } else if (form.value.user == 'true') {
    //   var x: boolean = form.value.values
    // }
    const updatemanager: updateManager = {
      managerName: form.value.managerName,
      managerEmail: form.value.managerEmail,
      isAuth: managerauthid,
      projectId: +projectid,
      managerId: +managerid,
    }
    this.appservice.adminupdateManager(updatemanager)
      .subscribe(res => {
       debugger; 
    if(this.appservice.updatemanagerdetails.statusCode=="000"){ 
      this.appservice.viewManagers(); 
    this.progressBar=false;
    this.dialogRef.close();
    this.toastr.success(this.appservice.updatemanagerdetails.statusMsg);
   }else if(this.appservice.updatemanagerdetails.statusCode=="008"){
    this.progressBar=false;
    this.toastr.error(this.appservice.updatemanagerdetails.statusMsg)
   }
  //  else if(this.appservice.updatemanagerdetails.statusCode=="500"){
  //   this.progressBar=false;
  //   this.toastr.error(this.appservice.updatemanagerdetails.statusMsg)
  //  }
   else{
    this.progressBar=false;
    this.toastr.error('Failed to update manager details')
   }
      })
  }

  // updateClick(): void {
  //   this.dialogRef.close();
  // }
 
}
