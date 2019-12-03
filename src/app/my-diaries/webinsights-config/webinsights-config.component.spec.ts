import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinsightsConfigComponent } from './webinsights-config.component';

describe('WebinsightsConfigComponent', () => {
  let component: WebinsightsConfigComponent;
  let fixture: ComponentFixture<WebinsightsConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebinsightsConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinsightsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
