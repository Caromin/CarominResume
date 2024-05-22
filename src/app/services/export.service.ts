import { Injectable } from '@angular/core';
import { UserInfoService } from './user-info.service';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor(protected userInfo: UserInfoService) { }

  exportCV() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf';
    link.download = `${this.userInfo.firstName}_${this.userInfo.lastName}_Resume.pdf`;
    link.click();
  }
}