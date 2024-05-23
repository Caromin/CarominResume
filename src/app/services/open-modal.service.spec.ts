import { TestBed } from '@angular/core/testing';

import { OpenModalService } from './open-modal.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';

describe('OpenModalService', () => {
  let service: OpenModalService;
  let dialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule]
    });
    service = TestBed.inject(OpenModalService);
    dialog = TestBed.inject(MatDialog);

    const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed: of(null) });
    spyOn(dialog, 'open').and.returnValue(dialogRefSpyObj);  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call aboutme component', () => {
    service.determineModal('aboutme')
    expect(service.currentSelect).toEqual('aboutme');
  })

  it('should call resume component', () => {
    service.determineModal('resume')
    expect(service.currentSelect).toEqual('resume');
  })

  it('should call portfolio component', () => {
    service.determineModal('portfolio')
    expect(service.currentSelect).toEqual('portfolio');
  })

  it('should call contact component', () => {
    service.determineModal('contact')
    expect(service.currentSelect).toEqual('contact');
  })
});
