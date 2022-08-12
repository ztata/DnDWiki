import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsOfMagicComponent } from './schools-of-magic.component';

describe('SchoolsOfMagicComponent', () => {
  let component: SchoolsOfMagicComponent;
  let fixture: ComponentFixture<SchoolsOfMagicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolsOfMagicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsOfMagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
