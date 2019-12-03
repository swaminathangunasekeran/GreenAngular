import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThudupcardComponent } from './thudupcard.component';

describe('ThudupcardComponent', () => {
  let component: ThudupcardComponent;
  let fixture: ComponentFixture<ThudupcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThudupcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThudupcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
