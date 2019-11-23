import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGiverComponent } from './edit-giver.component';

describe('EditGiverComponent', () => {
  let component: EditGiverComponent;
  let fixture: ComponentFixture<EditGiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
