import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './header/register/register.component';
import { LoginComponent } from './header/login/login.component';
import { ChangepasswordComponent } from './header/changepassword/changepassword.component';
import { UserheaderComponent } from './user/userheader/userheader.component';
import { HeaderComponent } from './header/header/header.component';
import { DasboardComponent } from './user/dasboard/dasboard.component';
import { UsertimesheetComponent } from './user/usertimesheet/usertimesheet.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { GeneratepasswordComponent } from './header/generatepassword/generatepassword.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AdmincompaniesComponent } from './admin/admincompanies/admincompanies.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { ManagersComponent } from './admin/managers/managers.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { ApprovalsComponent } from './admin/approvals/approvals.component';
import { ForgotpasswordComponent } from './header/forgotpassword/forgotpassword.component';
import { BlankpageComponent } from './header/blankpage/blankpage.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '', component: HeaderComponent,
    children: [{ path: 'register', component: RegisterComponent }]
  },
  {
    path: '', component: HeaderComponent,
    children: [{ path: 'login', component: LoginComponent }]
  },
  // {
  //   path: '', component: HeaderComponent,
  //   children: [{ path: 'changepsd', component: ChangepasswordComponent }]
  // },

  {
    path: '', component: HeaderComponent,
    children: [{ path: 'generatepsd', component: GeneratepasswordComponent }]
  },
  {
   path: '', component: HeaderComponent,
     children: [{ path: 'forgotpassword', component: ForgotpasswordComponent }]
   },
  { path: 'blankpage', component: BlankpageComponent },
  
  //{ path: 'forgotpassword', component: ForgotpasswordComponent },
  {
    path: '', component: AdminheaderComponent,
    children: [{ path: 'admindashboard', component: AdmindashboardComponent },
    { path: 'admincompanies', component: AdmincompaniesComponent },
    { path: 'project', component: ProjectsComponent },
    { path: 'manager', component: ManagersComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'approval', component: ApprovalsComponent },
    { path: 'changepassword', component: ChangepasswordComponent }
    ]
  },
  {
    path: '', component: UserheaderComponent,
    children: [{ path: 'dashboard', component: DasboardComponent },
    { path: 'usertimesheet', component: UsertimesheetComponent },
    { path: 'userprofile', component: UserprofileComponent },
    { path: 'changepsd', component: ChangepasswordComponent }
    ]
  },

  { path: 'adminhead', component: AdminheaderComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
