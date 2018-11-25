import { TestBed } from '@angular/core/testing';

import { UserPostsService } from './user-posts.service';

describe('UserPostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserPostsService = TestBed.get(UserPostsService);
    expect(service).toBeTruthy();
  });
});
