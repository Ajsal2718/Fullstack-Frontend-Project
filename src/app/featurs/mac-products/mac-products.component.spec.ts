import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacProductsComponent } from './mac-products.component';

describe('MacProductsComponent', () => {
  let component: MacProductsComponent;
  let fixture: ComponentFixture<MacProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MacProductsComponent]
    });
    fixture = TestBed.createComponent(MacProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
