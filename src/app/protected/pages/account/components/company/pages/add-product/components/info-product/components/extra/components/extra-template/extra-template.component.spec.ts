import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraTemplateComponent } from './extra-template.component';

describe('ExtraTemplateComponent', () => {
  let component: ExtraTemplateComponent;
  let fixture: ComponentFixture<ExtraTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
