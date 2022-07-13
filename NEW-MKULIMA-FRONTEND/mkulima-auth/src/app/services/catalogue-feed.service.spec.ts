import { TestBed } from '@angular/core/testing';

import { CatalogueFeedService } from './catalogue-feed.service';

describe('CatalogueFeedService', () => {
  let service: CatalogueFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogueFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
