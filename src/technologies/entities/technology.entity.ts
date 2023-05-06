import { ApiProperty } from '@nestjs/swagger';
import { Job, Technology } from '@prisma/client';

export class TechnologyEntity implements Technology {
  id: number

  @ApiProperty()
  title: string;

  @ApiProperty()
  job: Job;

  @ApiProperty()
  jobId: number | null;
}
