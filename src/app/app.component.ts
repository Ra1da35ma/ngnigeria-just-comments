import {Component, OnInit} from '@angular/core';
import {CommentService} from "./comment.service";
import {Observable} from "rxjs";
import {DsService} from "./ds.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public title = 'Just Comments!';
  public comments: Array<any>;

  constructor(
    private commentService: CommentService,
    private dsService: DsService
  ) {}

  ngOnInit() {
    this.commentService.getAllComments()
      .subscribe(comments => {
        this.comments = comments;
      });

    this.dsService.client.event.subscribe('new-comment', (comment) => {
      this.comments.unshift(comment);
    })

  }

  handleNewComment(model) {
    this.commentService.addComment(model)
      .subscribe(comment => {
        // this.comments.unshift(comment);
        this.dsService.client.event.emit('new-comment', comment)
      })
  }

  handleRemove(commentId) {
    this.commentService.removeComment(commentId)
      .subscribe(x => {
        const index = this.comments.findIndex(comment => comment.id === commentId);
        this.comments.splice(index, 1);
      })
  }
}
