import { Injectable } from '@angular/core';
import { AboutmeModalComponent } from '../components/aboutme-modal/aboutme-modal.component';
import { ContactModalComponent } from '../components/contact-modal/contact-modal.component';
import { PortfolioModalComponent } from '../components/portfolio-modal/portfolio-modal.component';
import { ResumeModalComponent } from '../components/resume-modal/resume-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class OpenModalService {

  constructor(public dialog: MatDialog) { }

  determineModal(value: string) {
    let component;
    switch(value) {
      case('aboutme'):
        component = AboutmeModalComponent;
        break;
      case('resume'):
        component = ResumeModalComponent;
        break;
      case('portfolio'):
        component = PortfolioModalComponent;
        break;
      case('contact'):
        component = ContactModalComponent;
        break;
    }

    this.openModal(component, value);
  }

  openModal(component: any, modalType: string) {
    let dialogRef = this.dialog.open(component, {
      maxHeight: '100vh',
      maxWidth: '100vw',
      height: '1100px',
      width: '800px',
      autoFocus: false,
      data: {value: modalType}
    })
  }
}