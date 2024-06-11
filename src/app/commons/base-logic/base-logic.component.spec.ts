import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLogicComponent } from './base-logic.component';

describe('BaseLogicComponent', () => {
  let component: BaseLogicComponent;
  let fixture: ComponentFixture<BaseLogicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseLogicComponent]
    });
    fixture = TestBed.createComponent(BaseLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
