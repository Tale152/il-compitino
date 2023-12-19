import { Injectable } from '@nestjs/common';
import { NotFoundError } from './in-memory-store.error';

@Injectable()
export class InMemoryStoreService<DataType> {
  private store: Map<string, DataType>;

  constructor() {
    this.store = new Map();
  }

  findAll() {
    return [...this.store.values()];
  }

  findOne(key: string) {
    if (this.store.has(key)) {
      return this.store.get(key);
    }
    return null;
  }

  findOneOrFail(key: string) {
    if (this.store.has(key)) {
      return this.store.get(key);
    }
    throw new NotFoundError(key);
  }

  findOneOrElse(key: string, defaultValue: DataType){
    const res = this.findOne(key);
    return res == null ? defaultValue : res;
  }

  set(key: string, data: DataType) {
    this.store.set(key, data);
  }

  delete(key: string) {
    this.store.delete(key);
  }

  map(funct: (data: DataType) => DataType) {
    for (const key of this.store.keys()) {
      const newItem = funct(this.store.get(key));
      this.store.set(key, newItem);
    }
  }
}
