export enum ItemTypeEnum {
  danger = 'danger',
  fragile = 'fragile',
  heavy = 'heavy',
}

export class ItemDto {
  itemId: string;
  name: string;
  types: Array<ItemTypeEnum>;
}
