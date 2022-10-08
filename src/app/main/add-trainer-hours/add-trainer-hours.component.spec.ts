import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainerHoursComponent } from './add-trainer-hours.component';

describe('AddTrainerHoursComponent', () => {
  let component: AddTrainerHoursComponent;
  let fixture: ComponentFixture<AddTrainerHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrainerHoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTrainerHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
