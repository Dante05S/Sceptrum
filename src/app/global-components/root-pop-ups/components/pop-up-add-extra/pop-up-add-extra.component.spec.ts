import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAddExtraComponent } from './pop-up-add-extra.component';

describe('PopUpAddExtraComponent', () => {
  let component: PopUpAddExtraComponent;
  let fixture: ComponentFixture<PopUpAddExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpAddExtraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpAddExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
