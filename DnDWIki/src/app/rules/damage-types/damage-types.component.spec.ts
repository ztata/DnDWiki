import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageTypesComponent } from './damage-types.component';

describe('DamageTypesComponent', () => {
  let component: DamageTypesComponent;
  let fixture: ComponentFixture<DamageTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamageTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
