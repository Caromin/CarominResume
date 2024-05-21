import { TestBed } from '@angular/core/testing';

import { OpenModalService } from './open-modal.service';
import { MatDialogModule } from '@angular/material/dialog';

describe('OpenModalService', () => {
  let service: OpenModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule]
    });
    service = TestBed.inject(OpenModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
