import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSelectFavoriteComponent } from './quick-select-favorite.component';

describe('QuickSelectFavoriteComponent', () => {
  let component: QuickSelectFavoriteComponent;
  let fixture: ComponentFixture<QuickSelectFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickSelectFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickSelectFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
