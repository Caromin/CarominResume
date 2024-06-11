import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserInfoService } from 'src/app/services/user-info.service';
import { BaseLogicComponent } from '../base-logic/base-logic.component';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss']
})
export class BaseModalComponent extends BaseLogicComponent {
  protected title = "Test";

  constructor(
    public dialogRef: MatDialogRef<BaseModalComponent>, protected override userInfo: UserInfoService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
    super(userInfo);
  }
}