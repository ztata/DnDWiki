import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitsDetailsComponent } from './traits-details.component';

describe('TraitsDetailsComponent', () => {
  let component: TraitsDetailsComponent;
  let fixture: ComponentFixture<TraitsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
