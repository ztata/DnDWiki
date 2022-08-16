import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardItemsComponent } from './standard-items.component';

describe('StandardItemsComponent', () => {
  let component: StandardItemsComponent;
  let fixture: ComponentFixture<StandardItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
