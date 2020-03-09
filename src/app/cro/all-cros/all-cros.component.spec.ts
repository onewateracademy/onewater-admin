import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCrosComponent } from './all-cros.component';

describe('AllCrosComponent', () => {
  let component: AllCrosComponent;
  let fixture: ComponentFixture<AllCrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
