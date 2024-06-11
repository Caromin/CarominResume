import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseModalComponent } from '../commons/base-modal/base-modal.component';
import { UserInfoService } from './user-info.service';

@Injectable({
  providedIn: 'root'
})
export class OpenModalService {
  currentSelect = "";
  constructor(public dialog: MatDialog, private userInfo: UserInfoService) {}

  determineModal(value: string) {
    switch(value) {
      case('aboutme'):
        this.currentSelect = 'aboutme';
        break;
      case('resume'):
        this.currentSelect = 'resume';
        break;
      case('portfolio'):
        this.currentSelect = 'portfolio';
        break;
      case('contact'):
        this.currentSelect = 'contact';
        break;
    }

    this.openModal(value);
  }

  openModal(modalType: string) {
    this.userInfo.currentModal.next(modalType);

    if (this.dialog.openDialogs.length == 0) {
        this.dialog.open(BaseModalComponent, {
          maxHeight: '100vh',
          maxWidth: '100vw',
          height: '1100px',
          width: '800px',
          autoFocus: false,
          data: {value: modalType}
        }).afterClosed().subscribe(_result => {});
    }
  }
}