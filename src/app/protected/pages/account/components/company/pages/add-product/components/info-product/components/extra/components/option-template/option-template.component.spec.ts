import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionTemplateComponent } from './option-template.component';

describe('OptionTemplateComponent', () => {
  let component: OptionTemplateComponent;
  let fixture: ComponentFixture<OptionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
