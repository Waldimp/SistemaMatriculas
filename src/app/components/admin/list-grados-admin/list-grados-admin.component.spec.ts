import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGradosAdminComponent } from './list-grados-admin.component';

describe('ListGradosAdminComponent', () => {
  let component: ListGradosAdminComponent;
  let fixture: ComponentFixture<ListGradosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGradosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGradosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
