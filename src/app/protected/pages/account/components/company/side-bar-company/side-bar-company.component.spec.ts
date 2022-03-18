import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarCompanyComponent } from './side-bar-company.component';

describe('SideBarCompanyComponent', () => {
  let component: SideBarCompanyComponent;
  let fixture: ComponentFixture<SideBarCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
