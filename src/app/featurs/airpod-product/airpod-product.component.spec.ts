import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirpodProductComponent } from './airpod-product.component';

describe('AirpodProductComponent', () => {
  let component: AirpodProductComponent;
  let fixture: ComponentFixture<AirpodProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirpodProductComponent]
    });
    fixture = TestBed.createComponent(AirpodProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
