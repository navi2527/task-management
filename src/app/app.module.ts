import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CreateTaskComponentComponent } from './components/create-task-component/create-task-component.component';
import { TaskListComponentComponent } from './components/task-list-component/task-list-component.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskServiceService } from './services/task-service.service';

const routes : Routes = [
    {path : '', component : AppComponent},
    {path : 'create-task', component : CreateTaskComponentComponent}, // Route for creating tasks
    {path : 'task-list', component : TaskListComponentComponent}, // Route for task list
    {path : '', redirectTo : '', pathMatch: 'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponentComponent,
    TaskListComponentComponent,
  ], // Register components here
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),// Set up routing
    FormsModule, // Import FormsModule for template-driven forms
    // Add other components here if needed
  ],
  providers: [
    TaskServiceService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
