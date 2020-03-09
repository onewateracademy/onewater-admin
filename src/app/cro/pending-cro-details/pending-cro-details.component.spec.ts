import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingCroDetailsComponent } from './pending-cro-details.component';

describe('PendingCroDetailsComponent', () => {
  let component: PendingCroDetailsComponent;
  let fixture: ComponentFixture<PendingCroDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingCroDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingCroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
