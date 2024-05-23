import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-close',
  templateUrl: './modal-close.component.html',
  styleUrls: ['./modal-close.component.scss']
})
export class ModalCloseComponent {

  constructor(public dialog: MatDialog) { }

  closeModal() {
    this.dialog.closeAll();
  }
}
