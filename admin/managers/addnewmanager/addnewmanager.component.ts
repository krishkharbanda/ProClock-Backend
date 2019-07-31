import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { addManager } from '../../../addmanager';
import { AppserviceService } from '../../../appservice.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { updateManager } from '../../../updateManager';

import { Observable } from 'rxjs/Rx';
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
  selector: 'app-addnewmanager',
  templateUrl: './addnewmanager.component.html',
  styleUrls: ['./addnewmanager.component.scss']
})
export class AddnewmanagerComponent implements OnInit {
  selectedOption;
  progressBar:any;
  addmanager: addManager;
  authValues = [
    { user: 'false', values: 0 },
    { user: 'true', values: 1 }
  ];

  constructor(
    public dialogRef: MatDialogRef<AddnewmanagerComponent>, private toastr: ToastrService, private appservice: AppserviceService) { }
  ngOnInit() {
    this.resetForm();
    this.appservice.viewManagers();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.addmanager = {
      managerName: '',
      managerEmail: '',
      isAuth: '',
      projectId: ''
    }
  }
  selectedauthId() {
    sessionStorage.setItem('authid', this.selectedOption.values);
  }
  OnSubmit(form: NgForm) {
    this.progressBar=true;
    this.appservice.adminadddManager(form.value).subscribe(res => {
      
      //  sessionStorage.setItem('managerauth', form.value.isAuth);
      this.appservice.viewManagers();
      //var value = form.value.isAuth
      //sessionStorage.setItem('isAuth', value);
      if (this.appservice.addmanagerdetails.statusCode == "000") {
        this.progressBar=false;
        
         this.dialogRef.close();
        this.resetForm(form);
        this.toastr.success(this.appservice.addmanagerdetails.statusMsg);
        //  var useridvalue = sessionStorage.getItem("userid")
      }
      else if (this.appservice.addmanagerdetails.statusCode == "008") {
        this.progressBar=false;
        this.toastr.error(this.appservice.addmanagerdetails.statusMsg);
      } 
      else if (this.appservice.addmanagerdetails.statusCode == "500") {
        this.progressBar=false;
        this.toastr.error(this.appservice.addmanagerdetails.statusMsg);
      } 
      // else {
      //   this.toastr.error('Failed to add manager');
      // }
      // else if(this.appservice.signup.statusCode=="004"){
      //   alert(this.appservice.signup.statusMsg);

      // }
    });
  }
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}

