import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorDetailsComponent } from './mayor-details.component';

describe('MayorDetailsComponent', () => {
  let component: MayorDetailsComponent;
  let fixture: ComponentFixture<MayorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
