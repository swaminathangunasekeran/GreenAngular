import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromNetworkComponent } from './from-network.component';

describe('FromNetworkComponent', () => {
  let component: FromNetworkComponent;
  let fixture: ComponentFixture<FromNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
