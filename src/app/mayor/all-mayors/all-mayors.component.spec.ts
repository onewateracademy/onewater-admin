import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMayorsComponent } from './all-mayors.component';

describe('AllMayorsComponent', () => {
  let component: AllMayorsComponent;
  let fixture: ComponentFixture<AllMayorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMayorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMayorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
