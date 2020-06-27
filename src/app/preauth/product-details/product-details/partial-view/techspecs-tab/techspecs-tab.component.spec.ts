import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechspecsTabComponent } from './techspecs-tab.component';

describe('TechspecsTabComponent', () => {
  let component: TechspecsTabComponent;
  let fixture: ComponentFixture<TechspecsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechspecsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechspecsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
