import { Module } from '@nestjs/common';
import { InMemoryStoreModule } from '@f-task/server/in-memory-store';
import { ItemsModule } from './items/items.module';
import { FacilitiesModule } from './facilities/facilities.module';

@Module({
  imports: [InMemoryStoreModule.forRoor(), ItemsModule, FacilitiesModule],
})
export class AppModule {}
