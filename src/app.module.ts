import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ContactsModule } from './jobs/contacts/contacts.module';
import { JobsModule } from './jobs/jobs.module';
import { TechnologiesModule } from './technologies/technologies.module';

@Module({
  imports: [PrismaModule, ContactsModule, JobsModule, TechnologiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
