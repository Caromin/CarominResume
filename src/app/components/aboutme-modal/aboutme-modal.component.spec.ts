import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmeModalComponent } from './aboutme-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ModalButtonsComponent } from 'src/app/commons/modal-buttons/modal-buttons.component';
import { ModalTitleComponent } from 'src/app/commons/modal-title/modal-title.component';
import { ModalCloseComponent } from 'src/app/commons/modal-close/modal-close.component';

describe('AboutmeModalComponent', () => {
  let component: AboutmeModalComponent;
  let fixture: ComponentFixture<AboutmeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutmeModalComponent, 
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
    fixture = TestBed.createComponent(AboutmeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
