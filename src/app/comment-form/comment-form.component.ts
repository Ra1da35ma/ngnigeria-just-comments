import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  model = {
    name: '',
    content: ''
  }

  @Output() newComment = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submitComment() {
    this.newComment.emit(this.model)
    this.model = {
      name: '',
      content: ''
    }
  }

}
