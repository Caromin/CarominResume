import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent {
  protected title = "Contact";

  constructor(
    public dialogRef: MatDialogRef<ContactModalComponent>, protected userInfo: UserInfoService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
}
