import { TestBed } from '@angular/core/testing';

import { ExportService } from './export.service';

describe('ExportService', () => {
  let service: ExportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call exportCV and call click method', () => {
    const link = document.createElement('a');
    link.download = `Resume.pdf`;

    const clickMock = jasmine.createSpy('click');
    HTMLElement.prototype.click = clickMock;

    service.exportCV();

    expect(link.download).toBe('Resume.pdf');
  })
});
