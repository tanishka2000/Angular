import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGiverComponent } from './show-giver.component';

describe('ShowGiverComponent', () => {
  let component: ShowGiverComponent;
  let fixture: ComponentFixture<ShowGiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowGiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
