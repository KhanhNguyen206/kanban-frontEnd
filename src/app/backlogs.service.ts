import {Injectable} from '@angular/core';
import {Backlog} from './Backlog';

@Injectable({
  providedIn: 'root'
})
export class BacklogsService {

  backlogList: Backlog[] = [
    {
      id: 1,
      title: 'Buy books',
      status: 'to do'
    },
    {
      id: 2,
      title: 'Buy laptop',
      status: 'doing'
    },
    {
      id: 3,
      title: 'Play games',
      status: 'done'
    },
    {
      id: 4,
      title: 'Play games1',
      status: 'to do'
    },
    {
      id: 4,
      title: 'Play football',
      status: 'to do'
    }
  ];

  constructor() {
  }

  findTodo(): Backlog[] {
    return this.backlogList.filter(backlogs => backlogs.status === 'to do');
  }

  findDoing(): Backlog[] {
    return this.backlogList.filter(backlogs => backlogs.status === 'doing');
  }

  findDone(): Backlog[] {
    return this.backlogList.filter(backlogs => backlogs.status === 'done');
  }

  addBacklog(backlog: Backlog): void {
    this.backlogList.push(backlog);
  }
}
