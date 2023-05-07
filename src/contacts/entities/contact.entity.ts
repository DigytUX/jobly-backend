import { Contact, Job } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ContactEntity implements Contact {
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
  company: string;

  @ApiProperty()
  linkedIn: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  jobs: Job;

  createdAt: string;

  @ApiProperty()
  lastContacted: string;

  userId: string;
}
