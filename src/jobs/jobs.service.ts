import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  create(createJobDto: CreateJobDto) {
    return this.prisma.job.create({ data: createJobDto as any }); // fix this error and find out why is not accepting thie type #001
  }

  findAll() {
    return this.prisma.job.findMany()
  }

  findOne(id: number) {
    return this.prisma.job.findUnique({where : {id}})
  }

  update(id: number, updateJobDto: UpdateJobDto) {
    return this.prisma.job.update({data: updateJobDto as any, where: {id}}); // fix this error and find out why is not accepting thie type #001
  }

  remove(id: number) {
    return this.prisma.job.delete({ where: { id } });  }
}
