import { TestBed } from '@angular/core/testing';

import { DucksRepositoryService } from './ducks-repository.service';

describe('DucksRepositoryService', () => {
  let service: DucksRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DucksRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
