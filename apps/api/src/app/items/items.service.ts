import { FacilityDto, ItemDto } from '@f-task/dtos';
import {
  InjectInmemoStoreService,
  InMemoryStoreService,
} from '@f-task/server/in-memory-store';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemService {
  constructor(
    @InjectInmemoStoreService('items')
    public itemsStore: InMemoryStoreService<ItemDto>,
    @InjectInmemoStoreService('items-facilities')
    private itemsFacilitiesPivotStore: InMemoryStoreService<Array<string>>
  ) {}

  moveInto(facility: FacilityDto, item: ItemDto) {
    const itemList = this.itemsFacilitiesPivotStore.findOneOrFail(
      facility.facilityId
    );
    this.itemsFacilitiesPivotStore.map((list) =>
      list.filter((itemId) => itemId !== item.itemId)
    );
    if (!itemList.includes(item.itemId)) {
      this.itemsFacilitiesPivotStore.set(facility.facilityId, [
        ...itemList,
        item.itemId,
      ]);
    }
  }

  deleteItem(item: ItemDto) {
    this.itemsFacilitiesPivotStore.map((list) =>
      list.filter((itemId) => itemId !== item.itemId)
    );
    this.itemsStore.delete(item.itemId);
  }

  listItemsFrom(facility: FacilityDto) {
    return this.itemsFacilitiesPivotStore
      .findOneOrFail(facility.facilityId)
      .map((itemId) => this.itemsStore.findOneOrFail(itemId));
  }
}
