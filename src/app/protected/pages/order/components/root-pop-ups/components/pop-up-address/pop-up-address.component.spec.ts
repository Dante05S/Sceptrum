import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAddressComponent } from './pop-up-address.component';

describe('PopUpAddressComponent', () => {
  let component: PopUpAddressComponent;
  let fixture: ComponentFixture<PopUpAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
