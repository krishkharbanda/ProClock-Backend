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
  selector: 'app-addnewproject',
  templateUrl: './addnewproject.component.html',
  styleUrls: ['./addnewproject.component.scss']
})
export class AddnewprojectComponent implements OnInit {
  progressBar:any;
  addproject: addProject;
  startDate = new Date(2018, 0, 1);
  
  constructor(public dialogRef: MatDialogRef<AddnewprojectComponent>, private toastr: ToastrService, private appservice: AppserviceService) { }
  
  ngOnInit() {
    this.resetForm();
    this.appservice.viewProjects();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.addproject = {
      projectName: '',
      projectCode: '',
      projectVendor: '',
      projectStartDate: '',
      projectDuration: '',
      description: '',
      companyId: ''
    }
  }
  OnSubmit(form: NgForm) {
    this.progressBar=true;
    this.appservice.adminadddProject(form.value).subscribe(res => {
      this.appservice.viewProjects();
      if (this.appservice.addprojectdetails.statusCode == "000") {
        this.progressBar=false;
        this.dialogRef.close();
        this.resetForm(form);
        this.toastr.success('Project added successfully')
        //  var useridvalue = sessionStorage.getItem("userid")
      }else if (this.appservice.addprojectdetails.statusCode == "500") {
        this.progressBar=false;
        this.toastr.error(this.appservice.addprojectdetails.statusMsg)
      }else {
        this.progressBar=false;
        this.toastr.error('Failed to add project')
      }

      // else if (this.appservice.signup.statusCode == "004") {
      //   alert(this.appservice.signup.statusMsg);

      // }
    });
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}


