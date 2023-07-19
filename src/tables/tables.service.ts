import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';

@Injectable()
export class TablesService {
  create(createTableDto: CreateTableDto) {
    return 'This action adds a new table';
  }

  findAll() {
    return `This action returns all tables`;
  }
}
