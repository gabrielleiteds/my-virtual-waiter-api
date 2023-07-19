import { IsNumberString, IsString } from 'class-validator';

export class CreateTableDto {
  @IsNumberString()
  number: number;
  @IsString()
  ownerId: string;
}
