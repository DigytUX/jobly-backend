// src/articles/entities/article.entity.ts

import { Job } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Technology } from '@prisma/client';

/* Displays example schema for Swagger */

export class JobEntity implements Job {
  id: number
  
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
  contactId: number | null;

  @ApiProperty()
  techstack: Technology;

  @ApiProperty()
  salary: number;
}