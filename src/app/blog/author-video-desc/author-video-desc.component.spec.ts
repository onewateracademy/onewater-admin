import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorVideoDescComponent } from './author-video-desc.component';

describe('AuthorVideoDescComponent', () => {
  let component: AuthorVideoDescComponent;
  let fixture: ComponentFixture<AuthorVideoDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorVideoDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorVideoDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
