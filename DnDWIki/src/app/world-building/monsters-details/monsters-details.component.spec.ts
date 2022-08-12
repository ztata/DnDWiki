import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstersDetailsComponent } from './monsters-details.component';

describe('MonstersDetailsComponent', () => {
  let component: MonstersDetailsComponent;
  let fixture: ComponentFixture<MonstersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonstersDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
