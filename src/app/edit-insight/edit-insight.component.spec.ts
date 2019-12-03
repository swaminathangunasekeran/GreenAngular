import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInsightComponent } from './edit-insight.component';

describe('EditInsightComponent', () => {
  let component: EditInsightComponent;
  let fixture: ComponentFixture<EditInsightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInsightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
