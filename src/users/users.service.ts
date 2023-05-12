import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto as any  }); // fix this error and find out why is not accepting thie type #001
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({where : {id}})
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({data: updateUserDto as any, where: {id}}); // fix this error and find out why is not accepting thie type #001
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });  
  }
  
}
