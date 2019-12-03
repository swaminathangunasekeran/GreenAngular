import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThudupVcardComponent } from './thudup-vcard.component';

describe('ThudupVcardComponent', () => {
  let component: ThudupVcardComponent;
  let fixture: ComponentFixture<ThudupVcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThudupVcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThudupVcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
