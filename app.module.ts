import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
//auth

//import { AuthGuard } from './auth/auth.guard';
//import { AuthInterceptor } from './auth/auth.interceptor';

//AppserviceService
import { AppserviceService } from './appservice.service';

// material
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
//router module
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { RegisterComponent } from './header/register/register.component';
import { ChangepasswordComponent } from './header/changepassword/changepassword.component';
import { LoginComponent } from './header/login/login.component';
import { FooterComponent } from './header/footer/footer.component';

//User Components
import { SidebarComponent } from './user/sidebar/sidebar.component';
import { DasboardComponent } from './user/dasboard/dasboard.component';
import { UserheaderComponent } from './user/userheader/userheader.component';
import { UsertimesheetComponent } from './user/usertimesheet/usertimesheet.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { GeneratepasswordComponent } from './header/generatepassword/generatepassword.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminsidenavComponent } from './admin/adminsidenav/adminsidenav.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AdmincompaniesComponent} from './admin/admincompanies/admincompanies.component';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { ProjectsComponent} from './admin/projects/projects.component';
import { ManagersComponent} from './admin/managers/managers.component';

import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeComponent } from './admin/employee/employee.component';
import { PsdmatchDirective } from './header/psdmatch.directive';
import { AddnewcompanyComponent }  from './admin/admincompanies/addnewcompany/addnewcompany.component';
import { UpadatecompaniesComponent} from './admin/admincompanies/upadatecompanies/upadatecompanies.component';
export { TimesheeteditComponent } from './user/dasboard/timesheetedit/timesheetedit.component';
import { UpadateprojectComponent } from './admin/projects/upadateproject/upadateproject.component';
import { AddnewprojectComponent } from './admin/projects/addnewproject/addnewproject.component';
import { UpdatemanagerComponent } from './admin/managers/updatemanager/updatemanager.component';
import { AddnewmanagerComponent } from './admin/managers/addnewmanager/addnewmanager.component';
import { UpdateemployeeComponent } from './admin/employee/updateemployee/updateemployee.component';
import { AddnewemployeeComponent } from './admin/employee/addnewemployee/addnewemployee.component';

import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {ToastrModule} from 'ngx-toastr';
import { ApprovalsComponent } from './admin/approvals/approvals.component';
import { ForgotpasswordComponent } from './header/forgotpassword/forgotpassword.component';
import { BlankpageComponent } from './header/blankpage/blankpage.component';
import { TimesheeteditComponent } from './user/dasboard/timesheetedit/timesheetedit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    ChangepasswordComponent,
    LoginComponent,
    FooterComponent,
    SidebarComponent,
    DasboardComponent,
    UserheaderComponent,
    UsertimesheetComponent,
    UserprofileComponent,
    GeneratepasswordComponent,
    AdmindashboardComponent,
    AdminsidenavComponent,
    AdminheaderComponent,
    AdmincompaniesComponent,
    AddnewcompanyComponent,
    ProjectsComponent,
    UpdatemanagerComponent,
    ManagersComponent,
    EmployeeComponent,
    PsdmatchDirective,
    UpadatecompaniesComponent,
    TimesheeteditComponent,
    UpadateprojectComponent,
    AddnewprojectComponent,
    AddnewmanagerComponent,
    UpdateemployeeComponent,
    AddnewemployeeComponent,
    ApprovalsComponent,
    ForgotpasswordComponent,
    BlankpageComponent,
    TimesheeteditComponent,
  ],
  exports: [
    A11yModule,
    CdkStepperModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
    UsertimesheetComponent
  ],
  imports: [
    ToastrModule.forRoot({
      timeOut:2000,
      positionClass:'toast-top-center',
      preventDuplicates: true
    }),
    OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    NgbModalModule,
    CommonModule,
    CdkTableModule,
    CdkTreeModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],

  providers: [AppserviceService],
  bootstrap: [AppComponent],
  entryComponents: [
    AdmincompaniesComponent,
    AddnewcompanyComponent,
    ProjectsComponent,
    AddnewprojectComponent,
    ManagersComponent,
    AddnewmanagerComponent,
    AddnewemployeeComponent,
    UpadateprojectComponent,
    UpdatemanagerComponent,
    UpadatecompaniesComponent,
    TimesheeteditComponent
  ]
})
export class AppModule { }
