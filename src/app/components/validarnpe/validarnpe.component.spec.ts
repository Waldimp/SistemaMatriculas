import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarnpeComponent } from './validarnpe.component';

describe('ValidarnpeComponent', () => {
  let component: ValidarnpeComponent;
  let fixture: ComponentFixture<ValidarnpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarnpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarnpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
