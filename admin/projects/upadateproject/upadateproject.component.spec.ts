import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadateprojectComponent } from './upadateproject.component';

describe('UpadateprojectComponent', () => {
  let component: UpadateprojectComponent;
  let fixture: ComponentFixture<UpadateprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpadateprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpadateprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
