
// src/articles/entities/article.entity.ts

import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

/* Displays example schema for Swagger */
export class UserEntity implements User {
  id: number
  
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;
  
  @ApiProperty()
  userId: string;

  @ApiProperty()
  resume: string;
}