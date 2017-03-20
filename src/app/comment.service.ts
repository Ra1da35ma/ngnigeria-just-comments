import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import 'rxjs/add/operator/map';

@Injectable()
export class CommentService {

  private resourceUrl = 'comments'

  constructor(
    private api: ApiService
  ) { }

  getAllComments() {
    return this.api.get(this.resourceUrl)
      .map(response => response.json());
  }

  addComment(data) {
    return this.api.post(this.resourceUrl, data)
      .map(response => response.json());
  }

  removeComment(id) {
    return this.api.delete(this.resourceUrl, id)
      .map(response => response.json());
  }

}
