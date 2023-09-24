import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('documents')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post(':collection')
  create(@Param('collection') collection: string, @Body() data: any) {
    return this.appService.createDocument(collection, data);
  }

  @Get(':collection')
  read(@Param('collection') collection: string) {
    return this.appService.readDocuments(collection);
  }

  @Put(':collection/:id')
  update(@Param('collection') collection: string, @Param('id') id: string, @Body() data: any) {
    return this.appService.updateDocument(collection, id, data);
  }

  @Delete(':collection/:id')
  delete(@Param('collection') collection: string, @Param('id') id: string) {
    return this.appService.deleteDocument(collection, id);
  }
}
