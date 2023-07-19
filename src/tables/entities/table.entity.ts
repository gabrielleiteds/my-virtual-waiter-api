import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TableDocument = HydratedDocument<Table>;

@Schema()
export class Table {
  @Prop()
  number: string;

  @Prop()
  ownerId: string;
}

export const TableSchema = SchemaFactory.createForClass(Table);
