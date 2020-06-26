import {
  Controller,
  Get,
  UseInterceptors,
  Post,
  UploadedFiles,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): String {
    return this.appService.getData();
  }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('image'))
  uploadFile(@UploadedFiles() files) {
    return files;
  }
}
