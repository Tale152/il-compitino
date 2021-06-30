import { InMemoryStoreModule } from '@f-task/server/in-memory-store';
import { Module } from '@nestjs/common';
import { FacilitiesModule } from '../facilities/facilities.module';
import { ItemsController } from './items.controller';
import { ItemService } from './items.service';

@Module({
  imports: [
    InMemoryStoreModule.forFeature(['items', 'items-facilities']),
    FacilitiesModule,
  ],
  controllers: [ItemsController],
  providers: [ItemService],
  exports: [ItemService],
})
export class ItemsModule {}
