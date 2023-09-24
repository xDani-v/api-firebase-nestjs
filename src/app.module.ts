import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as admin from 'firebase-admin';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    var serviceAccount = require("../nest-app-dfd30-firebase-adminsdk-vgyog-c1b77312f7.json");

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  }
}
