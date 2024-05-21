import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalButtonsComponent } from './modal-buttons.component';
import { ExportService } from 'src/app/services/export.service';
import { OpenModalService } from 'src/app/services/open-modal.service';
import { MatDialogModule } from '@angular/material/dialog';

describe('ModalButtonsComponent', () => {
  let component: ModalButtonsComponent;
  let fixture: ComponentFixture<ModalButtonsComponent>;
  let exportService: ExportService;
  let openModalService: OpenModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalButtonsComponent],
      imports: [MatDialogModule]
    });
    fixture = TestBed.createComponent(ModalButtonsComponent);
    exportService = TestBed.inject(ExportService);
    openModalService = TestBed.inject(OpenModalService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call export method that calls exportService exportCV', () => {
    const sut = spyOn(exportService, 'exportCV').and.stub();
    component.export();

    expect(sut).toHaveBeenCalledTimes(1);
  })

  it('should call open method that calls openModalService open', () => {
    const sut = spyOn(openModalService, 'determineModal').and.stub();
    component.open("test");

    expect(sut).toHaveBeenCalledTimes(1);
  })
});
