import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAddAddressComponent } from './pop-up-add-address.component';

describe('PopUpAddAddressComponent', () => {
  let component: PopUpAddAddressComponent;
  let fixture: ComponentFixture<PopUpAddAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpAddAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpAddAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
