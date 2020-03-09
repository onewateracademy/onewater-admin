import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorBlogdetailsComponent } from './mayor-blogdetails.component';

describe('MayorBlogdetailsComponent', () => {
  let component: MayorBlogdetailsComponent;
  let fixture: ComponentFixture<MayorBlogdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayorBlogdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorBlogdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
