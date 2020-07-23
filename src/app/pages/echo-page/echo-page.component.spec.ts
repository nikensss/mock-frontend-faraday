import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchoPageComponent } from './echo-page.component';

describe('EchoPageComponent', () => {
  let component: EchoPageComponent;
  let fixture: ComponentFixture<EchoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
