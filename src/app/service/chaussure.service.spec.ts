import { TestBed } from '@angular/core/testing';

import { ChaussureService } from './chaussure.service';

describe('ChaussureService', () => {
  let service: ChaussureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaussureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
