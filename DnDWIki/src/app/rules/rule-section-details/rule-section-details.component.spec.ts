import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleSectionDetailsComponent } from './rule-section-details.component';

describe('RuleSectionDetailsComponent', () => {
  let component: RuleSectionDetailsComponent;
  let fixture: ComponentFixture<RuleSectionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleSectionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleSectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
