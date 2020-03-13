import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAguilaComponent } from './new-aguila.component';

describe('NewAguilaComponent', () => {
  let component: NewAguilaComponent;
  let fixture: ComponentFixture<NewAguilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAguilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAguilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
