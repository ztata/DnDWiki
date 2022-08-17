import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleSectionsComponent } from './rule-sections.component';

describe('RuleSectionsComponent', () => {
  let component: RuleSectionsComponent;
  let fixture: ComponentFixture<RuleSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
