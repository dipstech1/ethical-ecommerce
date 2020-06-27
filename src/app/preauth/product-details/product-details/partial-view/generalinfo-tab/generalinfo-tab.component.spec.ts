import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralinfoTabComponent } from './generalinfo-tab.component';

describe('GeneralinfoTabComponent', () => {
  let component: GeneralinfoTabComponent;
  let fixture: ComponentFixture<GeneralinfoTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralinfoTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralinfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
