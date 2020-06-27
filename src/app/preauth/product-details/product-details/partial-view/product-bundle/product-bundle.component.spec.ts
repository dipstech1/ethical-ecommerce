import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBundleComponent } from './product-bundle.component';

describe('ProductBundleComponent', () => {
  let component: ProductBundleComponent;
  let fixture: ComponentFixture<ProductBundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
