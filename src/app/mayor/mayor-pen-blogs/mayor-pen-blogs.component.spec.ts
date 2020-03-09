import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorPenBlogsComponent } from './mayor-pen-blogs.component';

describe('MayorPenBlogsComponent', () => {
  let component: MayorPenBlogsComponent;
  let fixture: ComponentFixture<MayorPenBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayorPenBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorPenBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
