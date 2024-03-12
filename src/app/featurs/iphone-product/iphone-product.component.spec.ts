import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneProductComponent } from './iphone-product.component';

describe('IphoneProductComponent', () => {
  let component: IphoneProductComponent;
  let fixture: ComponentFixture<IphoneProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IphoneProductComponent]
    });
    fixture = TestBed.createComponent(IphoneProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
