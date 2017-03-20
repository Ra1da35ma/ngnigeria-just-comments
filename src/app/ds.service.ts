import { Injectable } from '@angular/core';
import * as deepstream from 'deepstream.io-client-js'

@Injectable()
export class DsService {

  public client

  constructor() {
    this.client = deepstream('[deepstreamhub.com-APP-URL]').login();
  }

}
