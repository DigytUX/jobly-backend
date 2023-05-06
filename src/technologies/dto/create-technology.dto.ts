import { ApiProperty } from '@nestjs/swagger';
import { Job } from '@prisma/client';

export class CreateTechnologyDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  job?: Job;

  @ApiProperty()
  jobId?: number | null;
}
