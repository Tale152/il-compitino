import { FacilityDto } from '@f-task/dtos';
import {
  InjectInmemoStoreService,
  InMemoryStoreService,
} from '@f-task/server/in-memory-store';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FacilitiesService {
  constructor(
    @InjectInmemoStoreService('facilities')
    public facilitiesStore: InMemoryStoreService<FacilityDto>
  ) {}
}
