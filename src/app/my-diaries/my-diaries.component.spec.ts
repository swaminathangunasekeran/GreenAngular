import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDairiesComponent } from './my-diaries.component';

describe('MyDairiesComponent', () => {
  let component: MyDairiesComponent;
  let fixture: ComponentFixture<MyDairiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDairiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDairiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
