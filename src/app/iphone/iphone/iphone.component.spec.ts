import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneComponent } from './iphone.component';

describe('IphoneComponent', () => {
  let component: IphoneComponent;
  let fixture: ComponentFixture<IphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IphoneComponent]
    });
    fixture = TestBed.createComponent(IphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
