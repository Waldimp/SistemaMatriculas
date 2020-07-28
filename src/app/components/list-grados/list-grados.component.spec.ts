import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGradosComponent } from './list-grados.component';

describe('ListGradosComponent', () => {
  let component: ListGradosComponent;
  let fixture: ComponentFixture<ListGradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
