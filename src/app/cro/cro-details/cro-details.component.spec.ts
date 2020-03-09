import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroDetailsComponent } from './cro-details.component';

describe('CroDetailsComponent', () => {
  let component: CroDetailsComponent;
  let fixture: ComponentFixture<CroDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
