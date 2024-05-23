import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCloseComponent } from './modal-close.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('ModalCloseComponent', () => {
  let component: ModalCloseComponent;
  let fixture: ComponentFixture<ModalCloseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCloseComponent],
      imports: [MatDialogModule]
    });
    fixture = TestBed.createComponent(ModalCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
