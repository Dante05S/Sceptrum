import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootPopUpsComponent } from './root-pop-ups.component';

describe('RootPopUpsComponent', () => {
  let component: RootPopUpsComponent;
  let fixture: ComponentFixture<RootPopUpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootPopUpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootPopUpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
