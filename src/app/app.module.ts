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
import { ModalTitleComponent } from './commons/modal-title/modal-title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { BaseModalComponent } from './commons/base-modal/base-modal.component';
import { BaseLogicComponent } from './commons/base-logic/base-logic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalButtonsComponent,
    ModalCloseComponent,
    AboutmeModalComponent,
    ContactModalComponent,
    PortfolioModalComponent,
    ResumeModalComponent,
    ModalTitleComponent,
    BaseModalComponent,
    BaseLogicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
