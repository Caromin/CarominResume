import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCloseComponent } from './modal-close.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

describe('ModalCloseComponent', () => {
  let component: ModalCloseComponent;
  let fixture: ComponentFixture<ModalCloseComponent>;
  let dialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCloseComponent],
      imports: [MatDialogModule]
    });
    fixture = TestBed.createComponent(ModalCloseComponent);
    dialog = TestBed.inject(MatDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call closeModal and call closeAll', () => {
    const sut = spyOn(dialog, 'closeAll').and.stub();

    component.closeModal();

    expect(sut).toHaveBeenCalledTimes(1);
  })
});
