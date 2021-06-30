import { DynamicModule, Module } from '@nestjs/common';
import { InMemoryStoreService } from './in-memory-store.service';
import { makeStoreToken } from './token.utils';

class InMemoryRootModule {
  static forRoor(): DynamicModule {
    return {
      global: true,
      module: InMemoryStoreModule,
    };
  }
}

@Module({})
export class InMemoryStoreModule {
  static forRoor(): DynamicModule {
    return InMemoryRootModule.forRoor();
  }

  static forFeature(storeNames: Array<string>): DynamicModule {
    const providers = storeNames.map((name) => ({
      provide: makeStoreToken(name),
      useFactory: () => new InMemoryStoreService(),
    }));

    return {
      module: InMemoryStoreModule,
      providers,
      exports: providers,
    };
  }
}
