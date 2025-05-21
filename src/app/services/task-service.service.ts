import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }

  private tasks = new BehaviorSubject<string[]>([]);
  currentTasks = this.tasks.asObservable();

  createTask(task: string) {
    const currentTasks = this.tasks.getValue();
    this.tasks.next([...currentTasks, task]);
    console.log('Task created: ' + task);
  }

  listTasks(){
    return this.tasks.asObservable();
  }

  deleteTask(task: string){
    const currentTasks = this.tasks.getValue();
    const updatedTasks = currentTasks.filter(t => t !== task);
    this.tasks.next(updatedTasks);
  }
}
