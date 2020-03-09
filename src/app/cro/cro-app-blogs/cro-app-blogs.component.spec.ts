import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroAppBlogsComponent } from './cro-app-blogs.component';

describe('CroAppBlogsComponent', () => {
  let component: CroAppBlogsComponent;
  let fixture: ComponentFixture<CroAppBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroAppBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroAppBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
