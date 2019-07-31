import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsidenavComponent } from './adminsidenav.component';

describe('AdminsidenavComponent', () => {
  let component: AdminsidenavComponent;
  let fixture: ComponentFixture<AdminsidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
