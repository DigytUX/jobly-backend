import { ApiProperty } from '@nestjs/swagger';
import { Contact, Technology } from '@prisma/client';

export class CreateJobDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  link: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  company: string;

  @ApiProperty()
  industry: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  travelRequired: boolean;

  contact?: Contact;

  @ApiProperty()
  contactId?: number | null;

  @ApiProperty()
  techstack: Technology;

  @ApiProperty()
  salary: string;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  userId: string;
}
