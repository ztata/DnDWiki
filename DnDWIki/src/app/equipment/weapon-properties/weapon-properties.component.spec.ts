import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponPropertiesComponent } from './weapon-properties.component';

describe('WeaponPropertiesComponent', () => {
  let component: WeaponPropertiesComponent;
  let fixture: ComponentFixture<WeaponPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
