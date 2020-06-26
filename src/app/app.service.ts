import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): String {
    return 'Welcome to api!';
  }
}
