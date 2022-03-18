import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAddSectionComponent } from './pop-up-add-section.component';

describe('PopUpAddSectionComponent', () => {
  let component: PopUpAddSectionComponent;
  let fixture: ComponentFixture<PopUpAddSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpAddSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpAddSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
