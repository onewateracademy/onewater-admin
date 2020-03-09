import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenCrosComponent } from './pen-cros.component';

describe('PenCrosComponent', () => {
  let component: PenCrosComponent;
  let fixture: ComponentFixture<PenCrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenCrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenCrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
