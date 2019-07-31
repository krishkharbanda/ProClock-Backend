import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { addProject } from '../../../addproject';
import { AppserviceService } from '../../../appservice.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { updateProject } from '../../../updateProject';
import { ToastrService } from 'ngx-toastr';

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
  selector: 'app-upadateproject',
  templateUrl: './upadateproject.component.html',
  styleUrls: ['./upadateproject.component.scss']
})

export class UpadateprojectComponent implements OnInit {

  updateproject: updateProject;
  progressBar:any;

  companyid = sessionStorage.getItem('companyId');
  projectid = sessionStorage.getItem('projectId')
  b = sessionStorage.getItem('projectName');
  c = sessionStorage.getItem('projectStartDate');
  d = sessionStorage.getItem('projectDuration');
  e = sessionStorage.getItem('projectVendor');
  f = sessionStorage.getItem('projectCode');
  g = sessionStorage.getItem('description');

constructor(
    public dialogRef: MatDialogRef<UpadateprojectComponent>, private appservice: AppserviceService, private toastr: ToastrService) { }
  
ngOnInit() {
    this.resetForm();
    this.appservice.viewProjects();
}
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.updateproject = {
      projectId: +'',
      companyId: +'',
      projectName: '',
      projectStartDate: '',
      projectCode: '',
      projectDuration: '',
      projectVendor: '',
      description: '',
    }
  }

  onSubmitUpdate(form: NgForm) {
    this.progressBar=true;
    var projectid = sessionStorage.getItem('projectId');
    var companyid = sessionStorage.getItem('companyId');
    const updateproject: updateProject = {
      projectId: +projectid,
      companyId: +companyid,
      projectName: form.value.projectName,
      projectStartDate: form.value.projectStartDate,
      projectVendor: form.value.projectVendor,
      projectDuration: form.value.projectDuration,
      projectCode: form.value.projectCode,
      description: form.value.description,
    }
    this.appservice.adminupdateProject(updateproject)
      .subscribe(res => {
        this.appservice.viewProjects();
        if(this.appservice.updateprojectdetails.statusCode=="000"){
          this.progressBar=false;
          this.dialogRef.close();
          this.toastr.success('Project updated successfully');
        }
        else if(this.appservice.updateprojectdetails.statusCode=="500"){
          this.progressBar=false;
          this.toastr.error(this.appservice.updateprojectdetails.statusMsg);
        }
        else{
          this.progressBar=false;
          this.toastr.error('Failed to update project details');
        }
      })
  }
  // updateClick(): void {
  //   this.dialogRef.close();
  // }

}

