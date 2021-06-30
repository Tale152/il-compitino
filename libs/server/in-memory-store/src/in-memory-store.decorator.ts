import { Inject } from '@nestjs/common';
import { makeStoreToken } from './token.utils';

export const InjectInmemoStoreService = (name: string) =>
  Inject(makeStoreToken(name));
