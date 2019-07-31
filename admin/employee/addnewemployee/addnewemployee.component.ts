import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { AppserviceService } from '../../../appservice.service';
import { addEmployee } from '../../../addemployee';
import { HttpClient } from '@angular/common/http';
import { addCompany } from 'src/app/addcompany';
import {Observable} from 'rxjs/Rx';
import { ToastrService } from 'ngx-toastr';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

export class PeriodicElement {
  companyId: string;
  companyName: string;
  companyAddress: string;
  userId: number;
  action: string;
}

@Component({
  selector: 'app-addnewemployee',
  templateUrl: './addnewemployee.component.html',
  styleUrls: ['./addnewemployee.component.scss']
})

export class AddnewemployeeComponent implements OnInit {
  addemployeedetails:any;
  viewcompaniesadmin: PeriodicElement;
  companieslist: any;
  addemployee: addEmployee; 
  projectboard: any;
  dashboardvaluse = this.appservice.rootUrl;
  companyboard = sessionStorage.getItem('userId');
  projectlist: any;
  managerlist: any;
  selectedOption1: any;
  selectedOption3: any;
  selectedOption2: any;
  userMesg:any;
  projectfilterlist: any;
  emailMesg:any;
  phnMsg:any;
  statusCode:any;
  progressBar:any;

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<AddnewemployeeComponent>, private toastr:ToastrService, private appservice: AppserviceService) { }
  
  ngOnInit() {
    this.resetForm();
    this.appservice.viewEmployeesList();
  }

  viewcompany = this.http.get(this.dashboardvaluse + '/proClock/viewCompanies/' + this.companyboard).subscribe((res: Response) => {
    this.companieslist = res;
  });
  selectedCompanyId() {
    this.http.get(this.dashboardvaluse + '/proClock/viewProjects/' + this.selectedOption1.companyId).subscribe((res: Response) => {
      this.projectlist = res;
    });
    sessionStorage.setItem('aecompanyid', this.selectedOption1.companyId);
  }
  selectedProjectId() {
    this.http.get(this.dashboardvaluse + '/proClock/viewManagers/' + this.selectedOption2.projectId).subscribe((res: Response) => {
      this.managerlist = res;
      var selectedRecords=[];
      this.managerlist.forEach(element => {
        if(element.enabled==true)
        selectedRecords.push(element);
      });
      this.managerlist=selectedRecords;
    });

    sessionStorage.setItem('aeprojectid', this.selectedOption2.projectId);
  }

  selectedmanagerId() {
    sessionStorage.setItem('aemanagerid', this.selectedOption3.managerId);
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.addemployee = {
      firstName: '',
      lastName: '',
      emailId: '',
      phoneNo: '',
      companyId: '',
      projectId: '',
      managerId: '',
      createdBy: '',
    }
  }
  OnSubmit(form: NgForm) {
    this.progressBar=true;
    this.appservice.adminadddemployee(form.value).subscribe(res => {
      //this.resetForm(form);
      this.appservice.viewEmployeesList();
      if(this.appservice.addemployeedetails[0].statusCode=='000'){ 
        var useridvalue = sessionStorage.getItem("userid");
        this.progressBar=false;
        this.dialogRef.close();
        this.resetForm(form);
        this.toastr.success('A verification link has been sent to your email');
     }
     else if (this.appservice.addemployeedetails[0].statusCode == '011') {
      this.progressBar=false;
      //this.userMesg=this.appservice.addemployeedetails[0].statusMsg;
      this.toastr.error(this.appservice.addemployeedetails[0].statusMsg);
    }else if (this.appservice.addemployeedetails[0].statusCode == '012') {
      this.progressBar=false;
     //this.emailMesg= this.appservice.addemployeedetails[0].statusMsg;
     this.toastr.error(this.appservice.addemployeedetails[0].statusMsg);
    }else if (this.appservice.addemployeedetails[0].statusCode == '013') {
      this.progressBar=false;
      //this.phnMsg=this.appservice.addemployeedetails[0].statusMsg;
      this.toastr.error(this.appservice.addemployeedetails[0].statusMsg);
    }
     else if(this.appservice.addemployeedetails[0].statusCode=="500"){
      this.progressBar=false;
      //this.toastr.error('Failed to add employee details'); 
      this.toastr.error(this.appservice.addemployeedetails[0].statusMsg);
     }
      console.log(res);
      //if(this.appservice.addemployeedetails.statusCode=="000"){ 
       //var useridvalue = sessionStorage.getItem("userid")
       // alert(this.appservice.signup.statusMsg);
     // }
      // else {
      //   alert("EmailId, mobileNumber or user name alredy found");
      // }
    });
  };

  // refresh(): void {
  //   window.location.reload();
  // 
  // };
}

