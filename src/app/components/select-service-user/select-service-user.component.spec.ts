import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectServiceUserComponent } from './select-service-user.component';

describe('SelectServiceUserComponent', () => {
  let component: SelectServiceUserComponent;
  let fixture: ComponentFixture<SelectServiceUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectServiceUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectServiceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
