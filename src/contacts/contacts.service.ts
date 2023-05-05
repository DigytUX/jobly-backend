import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  create(createContactDto: CreateContactDto) {
    return this.prisma.contact.create({ data: createContactDto as any }); // fix this error and find out why is not accepting thie type #001
  }

  findAll() {
    return this.prisma.contact.findMany()
  }

  findOne(id: number) {
    return this.prisma.contact.findUnique({where : {id}})
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return this.prisma.contact.update({data: updateContactDto as any, where: {id}}); // fix this error and find out why is not accepting thie type #001
  }

  remove(id: number) {
    return this.prisma.contact.delete({ where: { id } });  
  }
}
