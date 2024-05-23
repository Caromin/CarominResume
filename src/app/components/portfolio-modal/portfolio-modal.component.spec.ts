import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioModalComponent } from './portfolio-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ModalButtonsComponent } from 'src/app/commons/modal-buttons/modal-buttons.component';
import { ModalTitleComponent } from 'src/app/commons/modal-title/modal-title.component';
import { ModalCloseComponent } from 'src/app/commons/modal-close/modal-close.component';

describe('PortfolioModalComponent', () => {
  let component: PortfolioModalComponent;
  let fixture: ComponentFixture<PortfolioModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioModalComponent, 
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
    fixture = TestBed.createComponent(PortfolioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
