import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorAllBlogsComponent } from './mayor-all-blogs.component';

describe('MayorAllBlogsComponent', () => {
  let component: MayorAllBlogsComponent;
  let fixture: ComponentFixture<MayorAllBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayorAllBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorAllBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
