import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPrimaryMenuComponent } from './header-primary-menu.component';

describe('HeaderPrimaryMenuComponent', () => {
  let component: HeaderPrimaryMenuComponent;
  let fixture: ComponentFixture<HeaderPrimaryMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPrimaryMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPrimaryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
