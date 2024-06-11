import { Component, Input } from '@angular/core';
import { ExportService } from 'src/app/services/export.service';
import { OpenModalService } from 'src/app/services/open-modal.service';
import { BaseLogicComponent } from '../base-logic/base-logic.component';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-modal-buttons',
  templateUrl: './modal-buttons.component.html',
  styleUrls: ['./modal-buttons.component.scss']
})
export class ModalButtonsComponent {
  @Input() value = "";

  constructor(private exportService: ExportService, private openModal: OpenModalService) {}

  export() {
    this.exportService.exportCV();
  }

  open(value: string) {
    this.openModal.determineModal(value);
  }
}