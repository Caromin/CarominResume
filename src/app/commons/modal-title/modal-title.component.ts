import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-title',
  templateUrl: './modal-title.component.html',
  styleUrls: []
})
export class ModalTitleComponent {
  @Input() title = "";
}
