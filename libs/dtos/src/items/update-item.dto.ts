import { ItemTypeEnum } from './item.dto';

export class UpdateItemDto {
  name?: string;
  types?: Array<ItemTypeEnum>;
}
