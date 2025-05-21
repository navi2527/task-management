import { Component, TemplateRef } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-create-task-component',
  standalone: false,
  templateUrl: './create-task-component.component.html',
  styleUrl: './create-task-component.component.css'
})
export class CreateTaskComponentComponent {

  newTask: string = '';
  successMessage: string = '';
  errorMessage: string = '';
  constructor(private createtaskService: TaskServiceService) { }

  addTask() {
    if(this.newTask.trim()){
      this.createtaskService.createTask(this.newTask.trim());
      this.newTask = ''; // Clear the input field after adding the task
      this.successMessage = 'New task successfully created... ' +this.newTask
      console.log('Task successfully added:' + this.newTask);
    }
  }
}
