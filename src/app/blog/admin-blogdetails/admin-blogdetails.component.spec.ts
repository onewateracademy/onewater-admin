import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogdetailsComponent } from './admin-blogdetails.component';

describe('AdminBlogdetailsComponent', () => {
  let component: AdminBlogdetailsComponent;
  let fixture: ComponentFixture<AdminBlogdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBlogdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
