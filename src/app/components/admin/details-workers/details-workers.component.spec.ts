import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsWorkersComponent } from './details-workers.component';

describe('DetailsWorkersComponent', () => {
  let component: DetailsWorkersComponent;
  let fixture: ComponentFixture<DetailsWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
