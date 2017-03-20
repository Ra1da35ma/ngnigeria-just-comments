import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {

  @Input() comment;

  @Output() dblClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  dClick(comment) {
    console.log(comment);
  }

}
