import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMayorsComponent } from './app-mayors.component';

describe('AppMayorsComponent', () => {
  let component: AppMayorsComponent;
  let fixture: ComponentFixture<AppMayorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMayorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMayorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
