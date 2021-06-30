export class FacilityDto {
  facilityId: string;
  name: string;
  location: {
    lat: string;
    long: string;
  };
}
