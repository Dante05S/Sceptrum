import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateOrderComponent } from './template-order.component';

describe('TemplateOrderComponent', () => {
  let component: TemplateOrderComponent;
  let fixture: ComponentFixture<TemplateOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
