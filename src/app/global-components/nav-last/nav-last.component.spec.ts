import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLastComponent } from './nav-last.component';

describe('NavLastComponent', () => {
  let component: NavLastComponent;
  let fixture: ComponentFixture<NavLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
