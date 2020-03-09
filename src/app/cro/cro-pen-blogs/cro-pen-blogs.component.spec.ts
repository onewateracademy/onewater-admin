import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroPenBlogsComponent } from './cro-pen-blogs.component';

describe('CroPenBlogsComponent', () => {
  let component: CroPenBlogsComponent;
  let fixture: ComponentFixture<CroPenBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroPenBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroPenBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
