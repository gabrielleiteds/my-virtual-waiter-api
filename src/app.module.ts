import { Module } from '@nestjs/common';
import { TablesModule } from './tables/tables.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://leitedasilvag:sMypuHBmjc1IcHUQ@cluster-nestjs-test.ipvrhet.mongodb.net/?retryWrites=true&w=majority',
    ),
    TablesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
