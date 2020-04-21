import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingVideoComponent } from './landing-video.component';

describe('LandingVideoComponent', () => {
  let component: LandingVideoComponent;
  let fixture: ComponentFixture<LandingVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
