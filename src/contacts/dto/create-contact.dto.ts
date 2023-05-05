import { ApiProperty } from '@nestjs/swagger';
import { Job } from '@prisma/client';

export class CreateContactDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  company: string;

  @ApiProperty()
  linkedIn: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  lastContacted: string;

}
