import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersHoursComponent } from './trainers-hours.component';

describe('TrainersHoursComponent', () => {
  let component: TrainersHoursComponent;
  let fixture: ComponentFixture<TrainersHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainersHoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainersHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
