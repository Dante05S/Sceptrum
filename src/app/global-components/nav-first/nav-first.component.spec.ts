import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFirstComponent } from './nav-first.component';

describe('NavFirstComponent', () => {
  let component: NavFirstComponent;
  let fixture: ComponentFixture<NavFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
