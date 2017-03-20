import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import {ApiService} from "./api.service";
import {CommentService} from "./comment.service";
import {DsService} from "./ds.service";

@NgModule({
  declarations: [
    AppComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ApiService,
    CommentService,
    DsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
