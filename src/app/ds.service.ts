import { Injectable } from '@angular/core';
import * as deepstream from 'deepstream.io-client-js'

@Injectable()
export class DsService {

  public client

  constructor() {
    this.client = deepstream('wss://154.deepstreamhub.com?apiKey=68b9dab4-e3ea-4987-b6ed-b3c7c83b7c4a').login();
  }

}
