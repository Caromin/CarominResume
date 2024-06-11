import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-base-logic',
  templateUrl: './base-logic.component.html',
  styleUrls: []
})
export class BaseLogicComponent implements OnInit {
  public currentModal = "";

  constructor(protected userInfo: UserInfoService) {
  }
  
  ngOnInit() {
    this.userInfo.currentModal.subscribe(modal => {
      this.currentModal = modal;
    });
  }
}
