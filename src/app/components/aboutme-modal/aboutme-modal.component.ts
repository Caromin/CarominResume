import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-aboutme-modal',
  templateUrl: './aboutme-modal.component.html',
  styleUrls: []
})
export class AboutmeModalComponent {
  protected title = "About Me";
  
  constructor(
    public dialogRef: MatDialogRef<AboutmeModalComponent>, protected userInfo: UserInfoService,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
}
