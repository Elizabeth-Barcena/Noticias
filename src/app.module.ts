import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutorController } from './autor/autor.controller';

@Module({
  imports: [],
  controllers: [AppController, AutorController],
  providers: [AppService],
})
export class AppModule {}
