import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { UserRegister } from './user.register';
import { changePassword } from './user.password';
import { generatePasswordInterface } from './generate.password';
import { userLogin } from './user.login';
import { userTimePost } from './usertime.post';
import { addCompany } from './addcompany';
import { employeelistvalues } from './viewemployeelistvalues';
import { viewCompaniesListValues } from './viewcompanylist';
import { viewprojectsList } from './viewprojectlistvalues';
import { managerlistvalues } from './viewmanagerlistvalues';
import { approvallistvalues } from './viewapprovallistvalues';
import { userStatusUpDate } from './userstatusupdate';
import { managerStatusUpDate } from './managerstatusupdate';
import { addManager } from './addmanager';
import { addProject } from './addproject';
import { updateCompany } from './updateCompany';
import { updateProject } from './updateproject';
import { updateManager } from './updatemanager';
import { updatePendingTimesheet } from './updatePendingTimesheet';

import { userFogotPassword } from './userforgotpassword';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { addEmployee } from './addemployee';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppserviceService {

  //readonly rootUrl: string = 'http://env-0687861.cloud.cms500.com';
  readonly rootUrl: string = 'http://192.168.2.72:5678';
  //readonly rootUrl: string = 'https://proclockwebapi.azurewebsites.net';

  noOfWeeks:any;
  userreminderdetails:any;
  managerreminderdetails:any;
  employeeName:any;
  id:any;
  errorHandling: any;
  userid: any;
  signup: any;
  changepsd: any;
  generatepsd: any;
  login: any;
  usertime: any;
  companyid: any;
  projectid: any;
  fgpasd:any;
  updatetimesheetvalue: any;

  viewCompaniesList: any;
  viewProjectsList: any;
  viewManagersList: any;
  viewemployeeList: any;
  viewtimesheetList: any;
  viewApprovalList: any;

  addcompanydetails: any;
  addmanagerdetails: any;
  addprojectdetails: any;
  addemployeedetails: any;

  updatecompanydetails: any;
  updateprojectdetails: any;
  updatemanagerdetails: any;

  constructor(private http: HttpClient, private router: Router) {
  }

  registerUser(userregister: UserRegister) {

    const body: UserRegister = {
      firstName: userregister.firstName,
      lastName: userregister.lastName,
      userName: userregister.userName,
      emailId: userregister.emailId,
      phoneNo: userregister.phoneNo
    }

    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/proClock/register', body, { headers: reqHeader })
      .map((res: any) => {
        //alert(res.statusCode + res.statusMsg);
        //console.log(res);
        this.signup = res;
      })
  }
  //   }).catch((error: any) => {
  //     if (error.status === 500) {
  //       alert(Observable.throw(new Error(error.status)) + 'Mobile Number or EmailId or Username is already found');
  //        return Observable.throw(new Error(error.status));
  //     }
  //     else if (error.status === 400) {
  //        return Observable.throw(new Error(error.status));
  //     }
  //     else if (error.status === 409) {
  //       return Observable.throw(new Error(error.status));
  //     }
  //     else if (error.status === 406) {
  //       return Observable.throw(new Error(error.status));
  //     }
  //     else if (error.status === 405) {
  //       return Observable.throw(new Error(error.status));
  //     }
  // });
  // if (this.signup) {
  //   if (this.signup.statusCode === '000') {
  //     sessionStorage.setItem('userId', res.userDetails.userId);
  //     this.router.navigate(['/generatepsd']);
  //     alert('this.signup.statusMsg')
  //   }
  //   else if (this.signup.statusCode == '011') {
  //     alert('this.signup.statusMsg')
  //     this.usermesg=this.signup.statusMsg
  //   }else if (this.signup.statusCode == '012') {
  //     alert('this.signup.statusMsg')
  //    this.emailmesg= this.signup.statusMsg
  //   }else if (this.signup.statusCode == '013') {
  //     alert('this.signup.statusMsg')
  //     this.phnmsg=this.signup.statusMsg
  //   }
  // }
  generatepasswords(generatepasswordinterface: generatePasswordInterface) {
    let useridvalue = sessionStorage.getItem('userId');
    console.log('generate psd' + sessionStorage.getItem('userId'));
    const body: generatePasswordInterface = {
      userId: useridvalue,
      newPassword: generatepasswordinterface.newPassword,
    }
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/proClock/resetPassword', body, { headers: reqHeader })
      .map((res: any) => {
        this.generatepsd = res;
        console.log('generate psd' + res + this.generatepsd.newPassword + this.generatepsd.userId);
      });
  }

  ChangePassword(changepassword: changePassword) {
    let cahngeuserid = sessionStorage.getItem('userId');
   // let oldPasswords = sessionStorage.getItem("usoldPassworderid");
    const body: changePassword = {
      userId: cahngeuserid,
      oldPassword: changepassword.oldPassword,
      newPassword: changepassword.newPassword,
    }
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/proClock/changePassword', body, { headers: reqHeader })
      .map((res: any) => {
        this.changepsd = res;
      });
  }
  userloginby(userlogin: userLogin) {
    const body: userLogin = {
      emailId: userlogin.emailId,
      password: userlogin.password
    }
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/proClock/login', body, { headers: reqHeader })
      .map((res: Response) => {
        console.log('http content', res);
        this.login = res;
      });
  }
  forgotPassword(userfogotpassword: userFogotPassword) {
    const body: userFogotPassword = {
      emailId: userfogotpassword.emailId
    }
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/proClock/forgotPassword', body, { headers: reqHeader })
      .map((res: Response) => {
        console.log('http content', res);
        this.fgpasd = res;
      });
  }
  usertimeby(usertimepost: userTimePost) {
    debugger;
    var useridvaluefrom = sessionStorage.getItem('userId');
    var utprojectid = sessionStorage.getItem('utprojectid');

    var startDate = sessionStorage.getItem('weekfirstday');
    var endDate = sessionStorage.getItem('weekseventhday');
    console.log(' user idd ' + useridvaluefrom)

    const body: userTimePost = {
      startDate: startDate,
      endDate: endDate,
      monday: usertimepost.monday,
      tuesday: usertimepost.tuesday,
      wednesday: usertimepost.wednesday,
      thursday: usertimepost.thursday,
      friday: usertimepost.friday,
      saturday: usertimepost.saturday,
      sunday: usertimepost.sunday,
      userId: useridvaluefrom,
      projectId: utprojectid,
    }
    return this.http.post(this.rootUrl + '/proClock/updateTimesheet', body)
      .map((res: any) => {
        this.usertime = res;
      });
  }

  adminadddCompany(addcompany: addCompany) {
    var admincompanyadduserid = sessionStorage.getItem("userId");
    const body: addCompany = {
      userId: admincompanyadduserid,
      companyName: addcompany.companyName,
      companyAddress: addcompany.companyAddress
    }
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/proClock/addCompany', body, { headers: reqHeader })
      .map((res: any) => {
        this.addcompanydetails = res;
      });
  }
  adminadddManager(addmanager: addManager) {
    var projectid = sessionStorage.getItem('projectId');
    var managerauthid = sessionStorage.getItem('authid');
    //var isAuth = sessionStorage.getItem('managerauth') 
    //var isauth = sessionStorage.getItem('isAuth');
    //var isAuth: boolean = JSON.parse(isauth);
    const body: addManager = {
      managerName: addmanager.managerName,
      managerEmail: addmanager.managerEmail,
      isAuth: managerauthid,
      projectId: projectid
    }
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/proClock/addManager', body, { headers: reqHeader })
      .map((res: any) => {
        this.addmanagerdetails = res;
      });
  }
  adminadddProject(addproject: addProject) {
    var companyid = sessionStorage.getItem('companyId');
    const body: addProject = {
      projectName: addproject.projectName,
      projectCode: addproject.projectCode,
      projectVendor: addproject.projectVendor,
      projectStartDate: addproject.projectStartDate,
      projectDuration: addproject.projectDuration,
      description: addproject.description,
      companyId: companyid,
    }
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/proClock/addProject', body, { headers: reqHeader })
      .map((res: any) => {
        this.addprojectdetails = res;
      });
  }
  adminadddemployee(addemployee: addEmployee) {
    var userid = sessionStorage.getItem("userId");
    var aecompanyid = sessionStorage.getItem('aecompanyid');
    var aeprojectid = sessionStorage.getItem('aeprojectid');
    var aemanagerid = sessionStorage.getItem('aemanagerid');
    const body: addEmployee = {
      firstName: addemployee.firstName,
      lastName: addemployee.lastName,
      emailId: addemployee.emailId,
      phoneNo: addemployee.phoneNo,
      companyId: aecompanyid,
      projectId: aeprojectid,
      managerId: aemanagerid,
      createdBy: userid,
    }
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/proClock/addEmployee', body, { headers: reqHeader })
      .map((res: any) => {
        this.addemployeedetails = res;
        console.log(res);
      });
  }

  adminupdateProject(updateproject: updateProject) {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/proClock/updateProject', updateproject, { headers: reqHeader })
      .map((res: Response) => {
        this.updateprojectdetails = res;
      });
  }
  adminupdateManager(updatemanager: updateManager) {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/proClock/updateManager', updatemanager, { headers: reqHeader })
      .map((res: any) => {
        this.updatemanagerdetails = res;
      });
  }
  adminupdateCompany(updatecompany: updateCompany) {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/proClock/updateCompany', updatecompany, { headers: reqHeader })
      .map((res: any) => {
        this.updatecompanydetails = res;
      });
  }
  viewCompanies() {
    this.userid = +sessionStorage.getItem('userId');
    this.router.navigate(['/admincompanies']);
    return this.http.get(this.rootUrl + '/proClock/viewCompanies/' + this.userid)
      .toPromise().then(res => this.viewCompaniesList = res as viewCompaniesListValues[]);
  }

  viewProjects() {
    this.companyid = +sessionStorage.getItem('companyId');
    this.router.navigate(['/project']);
    return this.http.get(this.rootUrl + '/proClock/viewProjects/' + this.companyid)
      .toPromise().then(res => this.viewProjectsList = res as viewprojectsList[]);
  }

  viewTimesheet() {
    this.id = +sessionStorage.getItem
  }

  viewEmployeesList() {
    this.userid = +sessionStorage.getItem('userId');
    //this.router.navigate(['./employee']);
    return this.http.get(this.rootUrl + '/proClock/viewEmployees/' + this.userid)
      .toPromise().then(res => this.viewemployeeList = res as employeelistvalues[]);
  }

  viewManagers() {
    this.projectid = +sessionStorage.getItem('projectId');
    this.router.navigate(['/manager']);
    return this.http.get(this.rootUrl + '/proClock/viewManagers/' + this.projectid)
      .toPromise().then(res => this.viewManagersList = res as managerlistvalues[]);
  }


  viewApprovals() {
    this.userid = +sessionStorage.getItem('userId');
    this.router.navigate(['/approval']);
    return this.http.get(this.rootUrl + '/proClock/approvalsList/' + this.userid)
      .toPromise().then(res => this.viewApprovalList = res as approvallistvalues[]);
  }

  // viewsheetdata(){
  //   this.userid =  sessionStorage.getItem('userId');
  //return this.http.get(this.rootUrl + '/proClock/viewTimesheet/' + this.userid)
  //.toPromise().then(res => this.viewtimesheetList = res as managerlistvalues[]);
  //   this.http.get(this.rootUrl +  '/proClock/viewTimesheet/' + this.userid).subscribe((res: Response) => {
  //    this.viewList = res;
  //    this.router.navigate(['/usertimesheet']);
  // });
  // }

  userSendReminder(userstatusupdate: userStatusUpDate) {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/proClock/userStatusSendReport/'+userstatusupdate.id+'/'+userstatusupdate.noOfWeeks, userstatusupdate, { headers: reqHeader })
      .map((res: Response) => {
        this.userreminderdetails = res;
      });
  }
  managerSendReminder(managerstatusupdate: managerStatusUpDate) {
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/proClock/managerStatusSendReport/'+managerstatusupdate.id+'/'+managerstatusupdate.employeeName+'/'+managerstatusupdate.noOfWeeks, managerstatusupdate, { headers: reqHeader })
      .map((res: Response) => {
        this.managerreminderdetails = res;
      });
  }
  updateTimeSheet(updatetimesheet: updatePendingTimesheet) {
    //var uid = sessionStorage.getItem('userId');
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/proClock/editTimesheet', updatetimesheet, { headers: reqHeader })
      .map((res: Response) => {
        this.updatetimesheetvalue = res;
      });
  }
}
