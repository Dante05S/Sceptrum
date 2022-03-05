import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavReturnComponent } from './nav-return.component';

describe('NavReturnComponent', () => {
  let component: NavReturnComponent;
  let fixture: ComponentFixture<NavReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavReturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
