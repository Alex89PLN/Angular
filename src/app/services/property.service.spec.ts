import { TestBed } from '@angular/core/testing';

import { PropertyService } from './property.service';
import {SharedModule} from '../shared/shared.module'

describe('PropertyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [SharedModule]
  }));

  it('should be created', () => {

    const service: PropertyService = TestBed.get(PropertyService);
    expect(service).toBeTruthy();
  });
});
