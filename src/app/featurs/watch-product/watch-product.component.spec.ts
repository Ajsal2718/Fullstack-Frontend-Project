import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchProductComponent } from './watch-product.component';

describe('WatchProductComponent', () => {
  let component: WatchProductComponent;
  let fixture: ComponentFixture<WatchProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchProductComponent]
    });
    fixture = TestBed.createComponent(WatchProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
