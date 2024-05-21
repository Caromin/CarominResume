import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ModalButtonsComponent } from './commons/modal-buttons/modal-buttons.component';
import { ModalCloseComponent } from './commons/modal-close/modal-close.component';
import { AboutmeModalComponent } from './components/aboutme-modal/aboutme-modal.component';
import { ContactModalComponent } from './components/contact-modal/contact-modal.component';
import { PortfolioModalComponent } from './components/portfolio-modal/portfolio-modal.component';
import { ResumeModalComponent } from './components/resume-modal/resume-modal.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalButtonsComponent,
    ModalCloseComponent,
    AboutmeModalComponent,
    ContactModalComponent,
    PortfolioModalComponent,
    ResumeModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
