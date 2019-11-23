import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorVideoComponent } from './author-video.component';

describe('AuthorVideoComponent', () => {
  let component: AuthorVideoComponent;
  let fixture: ComponentFixture<AuthorVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
