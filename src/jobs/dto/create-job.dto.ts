import { ApiProperty } from '@nestjs/swagger';
import { Technology } from '@prisma/client';

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
  contactId: number;

  @ApiProperty()
  techstack: Technology;

  @ApiProperty()
  salary: number;
}
