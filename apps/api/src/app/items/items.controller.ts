import {
  ItemDto,
  ItemTypeEnum,
  ItemTypesDto,
  UpdateItemDto,
} from '@f-task/dtos';
import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Post,
  Delete,
} from '@nestjs/common';
import { FacilitiesService } from '../facilities/facilities.service';
import { ItemService } from './items.service';

@Controller('/items')
export class ItemsController {
  constructor(
    private itemsService: ItemService,
    private facilitiesService: FacilitiesService
  ) {}

  @Get('/')
  loadAll(): Array<ItemDto> {
    return this.itemsService.itemsStore.findAll();
  }

  @Get('/types')
  loadTypes(): Array<ItemTypesDto> {
    return Object.keys(ItemTypeEnum).map((key) => ({
      label: key,
      value: ItemTypeEnum[key],
    }));
  }

  @Post('/new')
  makeNew(@Body() newFat: ItemDto): ItemDto {
    this.itemsService.itemsStore.set(newFat.itemId, newFat);
    return newFat;
  }

  @Put('/:itemId')
  update(
    @Body() dataToUpdate: UpdateItemDto,
    @Param('itemId') itemId: string
  ): ItemDto {
    const oldItem = this.itemsService.itemsStore.findOneOrFail(itemId);
    const newItem = {
      ...oldItem,
      ...dataToUpdate,
    };
    this.itemsService.itemsStore.set(itemId, newItem);
    return newItem;
  }

  @Put('/add/:itemId/to/:facilityId')
  addToFacility(
    @Param('itemId') itemId: string,
    @Param('facilityId') facilityId: string
  ) {
    const item = this.itemsService.itemsStore.findOneOrFail(itemId);
    const facility =
      this.facilitiesService.facilitiesStore.findOneOrFail(facilityId);
    this.itemsService.moveInto(facility, item);
  }

  @Put('/move/:itemId/from/:sourceFacilityId/to/:destinationFacilityId')
  moveFromSourceFacilityToDestinationFacility(
    @Param('itemId') itemId: string,
    @Param('sourceFacilityId') sourceFacilityId: string,
    @Param('destinationFacilityId') destinationFacilityId: string
  ) {
    const item = this.itemsService.itemsStore.findOneOrFail(itemId);
    const sourceFacility =
      this.facilitiesService.facilitiesStore.findOneOrFail(sourceFacilityId);
    const destinationFacility =
      this.facilitiesService.facilitiesStore.findOneOrFail(destinationFacilityId);
    this.itemsService.moveToAnotherFacility(sourceFacility, destinationFacility, item);
  }

  @Delete('/:itemId')
  deleteItem(@Param('itemId') itemId: string) {
    const item = this.itemsService.itemsStore.findOneOrFail(itemId);
    this.itemsService.deleteItem(item);
  }
}
