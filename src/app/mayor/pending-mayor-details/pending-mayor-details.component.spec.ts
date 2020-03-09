import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingMayorDetailsComponent } from './pending-mayor-details.component';

describe('PendingMayorDetailsComponent', () => {
  let component: PendingMayorDetailsComponent;
  let fixture: ComponentFixture<PendingMayorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingMayorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingMayorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
