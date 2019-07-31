import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewprojectComponent } from './addnewproject.component';

describe('AddnewprojectComponent', () => {
  let component: AddnewprojectComponent;
  let fixture: ComponentFixture<AddnewprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
