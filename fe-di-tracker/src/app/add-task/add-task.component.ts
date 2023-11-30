import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ModifyTaskService } from '../modify-task.service';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  @ViewChild('myForm') form : NgForm | undefined;
 
constructor(private modifyService : ModifyTaskService){}
  
onAddTask(title: string, description: string){
    this.modifyService.addTask(title,description);
    console.log(title,description);
    
    
  }

}
