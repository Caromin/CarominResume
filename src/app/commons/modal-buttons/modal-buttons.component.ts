import { Component } from '@angular/core';
import { ExportService } from 'src/app/services/export.service';
import { OpenModalService } from 'src/app/services/open-modal.service';

@Component({
  selector: 'app-modal-buttons',
  templateUrl: './modal-buttons.component.html',
  styleUrls: ['./modal-buttons.component.scss']
})
export class ModalButtonsComponent {

  constructor(private exportService: ExportService, private openModal: OpenModalService) {}

  export() {
    this.exportService.exportCV();
  }

  open(value: string) {
    this.openModal.determineModal(value);
  }
}