import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCrosComponent } from './app-cros.component';

describe('AppCrosComponent', () => {
  let component: AppCrosComponent;
  let fixture: ComponentFixture<AppCrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
