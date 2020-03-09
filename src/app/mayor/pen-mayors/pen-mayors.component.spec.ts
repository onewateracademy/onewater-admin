import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenMayorsComponent } from './pen-mayors.component';

describe('PenMayorsComponent', () => {
  let component: PenMayorsComponent;
  let fixture: ComponentFixture<PenMayorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenMayorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenMayorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
