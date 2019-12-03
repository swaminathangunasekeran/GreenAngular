import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHighLightComponent } from './user-high-light.component';

describe('UserHighLightComponent', () => {
  let component: UserHighLightComponent;
  let fixture: ComponentFixture<UserHighLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHighLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHighLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
