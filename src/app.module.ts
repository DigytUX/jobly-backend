import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ContactsModule } from './contacts/contacts.module';
import { JobsModule } from './jobs/jobs.module';
import { TechnologiesModule } from './technologies/technologies.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, ContactsModule, JobsModule, TechnologiesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
