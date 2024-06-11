import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseModalComponent } from './base-modal.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalButtonsComponent } from '../modal-buttons/modal-buttons.component';
import { ModalCloseComponent } from '../modal-close/modal-close.component';
import { ModalTitleComponent } from '../modal-title/modal-title.component';

describe('BaseModalComponent', () => {
  let component: BaseModalComponent;
  let fixture: ComponentFixture<BaseModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseModalComponent,
        ModalButtonsComponent,
        ModalTitleComponent,
        ModalCloseComponent
      ],
      imports: [MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ]
    });
    fixture = TestBed.createComponent(BaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
