import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSayianFourComponent } from './super-sayian-four.component';

describe('SuperSayianFourComponent', () => {
  let component: SuperSayianFourComponent;
  let fixture: ComponentFixture<SuperSayianFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSayianFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSayianFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
