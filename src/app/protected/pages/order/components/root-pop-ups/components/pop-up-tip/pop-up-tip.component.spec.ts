import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpTipComponent } from './pop-up-tip.component';

describe('PopUpTipComponent', () => {
  let component: PopUpTipComponent;
  let fixture: ComponentFixture<PopUpTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpTipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
