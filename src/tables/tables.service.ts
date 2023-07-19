import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TablesService {
  constructor(@InjectModel(Table.name) private tableModel: Model<Table>) {}

  create(createTableDto: CreateTableDto) {
    const createdTable = new this.tableModel(createTableDto);

    return createdTable.save();
  }

  findAll() {
    return this.tableModel.find().exec();
  }
}
