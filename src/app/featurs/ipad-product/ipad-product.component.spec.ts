import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadProductComponent } from './ipad-product.component';

describe('IpadProductComponent', () => {
  let component: IpadProductComponent;
  let fixture: ComponentFixture<IpadProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpadProductComponent]
    });
    fixture = TestBed.createComponent(IpadProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
