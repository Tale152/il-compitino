export class NotFoundError extends Error {
  constructor(key: string) {
    super(`Entity with key ${key} not found`);
  }
}
