/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IfRetryService } from './ifRetry.service';

describe('Service: IfRetry', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IfRetryService]
    });
  });

  it('should ...', inject([IfRetryService], (service: IfRetryService) => {
    expect(service).toBeTruthy();
  }));
});
