import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSitemapComponent } from './footer-sitemap.component';

describe('FooterSitemapComponent', () => {
  let component: FooterSitemapComponent;
  let fixture: ComponentFixture<FooterSitemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSitemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSitemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
