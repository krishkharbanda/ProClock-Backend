import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewmanagerComponent } from './addnewmanager.component';

describe('AddnewmanagerComponent', () => {
  let component: AddnewmanagerComponent;
  let fixture: ComponentFixture<AddnewmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
