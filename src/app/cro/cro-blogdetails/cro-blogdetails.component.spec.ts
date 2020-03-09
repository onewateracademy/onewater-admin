import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroBlogdetailsComponent } from './cro-blogdetails.component';

describe('CroBlogdetailsComponent', () => {
  let component: CroBlogdetailsComponent;
  let fixture: ComponentFixture<CroBlogdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroBlogdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroBlogdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
