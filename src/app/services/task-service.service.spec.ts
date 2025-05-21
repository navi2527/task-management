import { TestBed } from '@angular/core/testing';

import { TaskServiceService } from './task-service.service';

describe('TaskServiceService', () => {
  let service: TaskServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


//spyon() -> creates a spy on the method of the service