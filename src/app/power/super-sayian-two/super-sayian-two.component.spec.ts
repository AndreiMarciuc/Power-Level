import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSayianTwoComponent } from './super-sayian-two.component';

describe('SuperSayianTwoComponent', () => {
  let component: SuperSayianTwoComponent;
  let fixture: ComponentFixture<SuperSayianTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSayianTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSayianTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
