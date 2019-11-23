import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobGiverComponent } from './job-giver.component';

describe('JobGiverComponent', () => {
  let component: JobGiverComponent;
  let fixture: ComponentFixture<JobGiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobGiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobGiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
