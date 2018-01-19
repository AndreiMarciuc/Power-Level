import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSayianThreeComponent } from './super-sayian-three.component';

describe('SuperSayianThreeComponent', () => {
  let component: SuperSayianThreeComponent;
  let fixture: ComponentFixture<SuperSayianThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSayianThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSayianThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
