import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@nxtutorial/data';

@Component({
  selector: 'nxtutorial-todods',
  templateUrl: './todods.component.html',
  styleUrls: ['./todods.component.less']
})
export class TododsComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() {}

  ngOnInit() {}
}
