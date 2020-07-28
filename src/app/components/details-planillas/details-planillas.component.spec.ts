import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPlanillasComponent } from './details-planillas.component';

describe('DetailsPlanillasComponent', () => {
  let component: DetailsPlanillasComponent;
  let fixture: ComponentFixture<DetailsPlanillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPlanillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPlanillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
