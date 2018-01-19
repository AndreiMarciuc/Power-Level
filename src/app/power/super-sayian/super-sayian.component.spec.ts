import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSayianComponent } from './super-sayian.component';

describe('SuperSayianComponent', () => {
  let component: SuperSayianComponent;
  let fixture: ComponentFixture<SuperSayianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSayianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSayianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
