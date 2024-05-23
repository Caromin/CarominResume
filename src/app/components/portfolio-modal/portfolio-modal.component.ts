import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.scss']
})
export class PortfolioModalComponent {
  protected title = "Portfolio";

  constructor(
    public dialogRef: MatDialogRef<PortfolioModalComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {}
}
