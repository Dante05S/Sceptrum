import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAddOptionComponent } from './pop-up-add-option.component';

describe('PopUpAddOptionComponent', () => {
  let component: PopUpAddOptionComponent;
  let fixture: ComponentFixture<PopUpAddOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpAddOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpAddOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
