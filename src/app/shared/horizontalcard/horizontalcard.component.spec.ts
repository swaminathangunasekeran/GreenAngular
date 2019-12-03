import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalcardComponent } from './horizontalcard.component';

describe('HorizontalcardComponent', () => {
  let component: HorizontalcardComponent;
  let fixture: ComponentFixture<HorizontalcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
