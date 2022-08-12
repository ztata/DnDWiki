import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellDetailsComponent } from './spell-details.component';

describe('SpellDetailsComponent', () => {
  let component: SpellDetailsComponent;
  let fixture: ComponentFixture<SpellDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
