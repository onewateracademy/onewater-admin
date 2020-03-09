import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorAppBlogsComponent } from './mayor-app-blogs.component';

describe('MayorAppBlogsComponent', () => {
  let component: MayorAppBlogsComponent;
  let fixture: ComponentFixture<MayorAppBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayorAppBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorAppBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
