import { TestBed } from '@angular/core/testing';

import { WebBuilderService } from './web-builder.service';

describe('WebBuilderService', () => {
  let service: WebBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
