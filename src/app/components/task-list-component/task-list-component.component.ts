import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-task-list-component',
  standalone: false,
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.css'
})
export class TaskListComponentComponent implements OnInit{

  tasks: string[] = [];
  constructor(private taskListService: TaskServiceService) { }
  ngOnInit(): void {
    this.taskListService.currentTasks.subscribe(tasks => {
      this.tasks = tasks;
    });

  }

  deleteTask(task: string): void {
    this.taskListService.deleteTask(task);
    // Optionally, you can also remove the task from the local tasks array
  }
}
