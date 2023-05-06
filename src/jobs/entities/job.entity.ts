// src/articles/entities/article.entity.ts

import { Job, Technology } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

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

  createdAt: Date;

  userId: string;
}