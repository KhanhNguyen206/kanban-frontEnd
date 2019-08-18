import {Component, OnInit} from '@angular/core';
import {BacklogsService} from '../backlogs.service';
import {Backlog} from '../Backlog';

@Component({
  selector: 'app-backlogs',
  templateUrl: './backlogs.component.html',
  styleUrls: ['./backlogs.component.scss']
})
export class BacklogsComponent implements OnInit {

  backlogsTodo: Backlog[];
  backlogsDoing: Backlog[];
  backlogsDone: Backlog[];
  backlogs: Backlog[];
  backlog: Backlog;
  titleToDo = '';
  titleDoing = '';
  titleDone = '';
  i = 5;

  index: number;

  constructor(private service: BacklogsService) {
  }

  ngOnInit() {
    this.backlogsTodo = this.service.findTodo();
    this.backlogsDoing = this.service.findDoing();
    this.backlogsDone = this.service.findDone();
    this.backlogs = this.service.backlogList;
    this.backlog = new Backlog();
  }

  onDragstart(i) {
    console.log(0);
    this.index = i;
  }

  onDropTodo($event: DragEvent) {
    $event.preventDefault();
    console.log(1);
    this.backlogs[this.index].status = 'to do';
  }

  onDropDoing($event: DragEvent) {
    $event.preventDefault();
    console.log(2);
    this.backlogs[this.index].status = 'doing';
  }

  onDropDone($event: DragEvent) {
    $event.preventDefault();
    console.log(3);
    this.backlogs[this.index].status = 'done';
  }

  allowDrop($event: DragEvent) {
    $event.preventDefault();
  }

  addTodo() {
    this.i = this.i + 1;
    this.backlog.id = this.i;
    this.backlog.title = this.titleToDo;
    this.backlog.status = 'to do';
    this.backlogs.push(this.backlog);
    this.backlog = new Backlog();
    this.titleToDo = '';
  }

  addDoing() {
    this.i = this.i + 1;
    this.backlog.id = this.i;
    this.backlog.title = this.titleDoing;
    this.backlog.status = 'doing';
    this.backlogs.push(this.backlog);
    this.backlog = new Backlog();
    this.titleDoing = '';
  }

  addDone() {
    this.i = this.i + 1;
    this.backlog.id = this.i;
    this.backlog.title = this.titleDone;
    this.backlog.status = 'done';
    this.backlogs.push(this.backlog);
    this.backlog = new Backlog();
    this.titleDone = '';
  }
}
