import { Injectable } from '@nestjs/common';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TechnologiesService {
  constructor(private prisma: PrismaService) {}

  create(createTechnologyDto: CreateTechnologyDto) {
    return this.prisma.technology.create({ data: createTechnologyDto as any }); // fix this error and find out why is not accepting thie type #001
  }

  findAll() {
    return this.prisma.technology.findMany()
  }

  findOne(id: number) {
    return this.prisma.technology.findUnique({where : {id}})
  }

  update(id: number, updateTechnologyDto: UpdateTechnologyDto) {
    return this.prisma.technology.update({data: updateTechnologyDto as any, where: {id}}); // fix this error and find out why is not accepting thie type #001
  }

  remove(id: number) {
    return this.prisma.technology.delete({ where: { id } });  
  }
}