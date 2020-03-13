import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelToolComponent } from './travel-tool.component';

describe('TravelToolComponent', () => {
  let component: TravelToolComponent;
  let fixture: ComponentFixture<TravelToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
