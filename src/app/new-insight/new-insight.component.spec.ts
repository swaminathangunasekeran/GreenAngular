import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInsightComponent } from './new-insight.component';

describe('NewInsightComponent', () => {
  let component: NewInsightComponent;
  let fixture: ComponentFixture<NewInsightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInsightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
