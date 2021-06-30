export class UpdateFacilityDto {
  name?: string;
  location?: {
    lat: string;
    long: string;
  };
}
