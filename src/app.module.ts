import { Module } from '@nestjs/common';
import { TablesModule } from './tables/tables.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_HOST),
    TablesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
