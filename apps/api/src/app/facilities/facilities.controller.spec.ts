import { InMemoryStoreModule } from '@f-task/server/in-memory-store';
import { Test, TestingModule } from '@nestjs/testing';
import { FacilitiesController } from './facilities.controller';

describe('FacilitiesController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        InMemoryStoreModule.forRoor(),
        InMemoryStoreModule.forFeature(['facilities']),
      ],
      controllers: [FacilitiesController],
      providers: [],
    }).compile();
  });

  describe('getData', () => {
    it('should return the list of facilities', () => {
      const facilitiesController =
        app.get<FacilitiesController>(FacilitiesController);
      expect(typeof facilitiesController.loadAll().length).toBe('number');
    });
  });
});
