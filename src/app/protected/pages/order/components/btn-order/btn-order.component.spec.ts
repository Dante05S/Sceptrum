import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnOrderComponent } from './btn-order.component';

describe('BtnOrderComponent', () => {
  let component: BtnOrderComponent;
  let fixture: ComponentFixture<BtnOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
