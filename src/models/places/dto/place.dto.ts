import { Place } from '@prisma/client';
import { Expose } from 'class-transformer';
import { GenericObject } from 'src/types';

export class PlaceDto implements Place {
  @Expose({ groups: [] })
  id: string;

  @Expose({ groups: [] })
  countryCode: string;

  @Expose({ groups: [] })
  stateCode: string;

  @Expose({ groups: [] })
  suburb: string;

  @Expose({ groups: [] })
  street: string;

  @Expose({ groups: [] })
  streetNumber: string;

  @Expose({ groups: [] })
  postcode: string;

  @Expose({ groups: [] })
  providerId: string | null;

  @Expose({ groups: [] })
  data: GenericObject | null;

  @Expose({ groups: [] })
  createdAt: Date;

  @Expose({ groups: [] })
  updatedAt: Date;

  @Expose({ groups: [] })
  deletedAt: Date | null;
}
