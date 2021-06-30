import { FacilityDto, UpdateFacilityDto } from '@f-task/dtos';
import { Body, Controller, Get, Param, Put, Post } from '@nestjs/common';
import { FacilitiesService } from './facilities.service';

@Controller('/facilities')
export class FacilitiesController {
  constructor(private facilitiesService: FacilitiesService) {}

  @Get('/')
  loadAll(): Array<FacilityDto> {
    return this.facilitiesService.facilitiesStore.findAll();
  }

  @Post('/new')
  makeNew(@Body() newFat: FacilityDto): FacilityDto {
    this.facilitiesService.facilitiesStore.set(newFat.facilityId, newFat);
    return newFat;
  }

  @Put('/:facilityId')
  update(
    @Body() dataToUpdate: UpdateFacilityDto,
    @Param('facilityId') facilityId: string
  ): FacilityDto {
    const oldFat =
      this.facilitiesService.facilitiesStore.findOneOrFail(facilityId);
    const newFat = {
      ...dataToUpdate,
      ...oldFat,
    };
    this.facilitiesService.facilitiesStore.set(facilityId, newFat);
    return newFat;
  }
}
