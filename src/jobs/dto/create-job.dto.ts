import { ApiProperty } from '@nestjs/swagger';
import { Contact, Technology } from '@prisma/client';

export class CreateJobDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  industry: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  travelRequired: boolean;

  @ApiProperty()
  contact?: Contact;

  @ApiProperty()
  contactId?: number | null;

  @ApiProperty()
  techstack: Technology;

  @ApiProperty()
  salary: number;

  @ApiProperty()
  createdAt: Date;
}
