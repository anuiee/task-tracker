import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModifyTaskService } from '../modify-task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss'
})
export class ListTaskComponent {
  public test ='';
  constructor(private modifyService : ModifyTaskService){}

  // onListTask(title: string, description: string){
  //   this.modifyService.addTask(title,description);
  //   console.log(title,description);
    
    
  // }
  taskList: any[] = [];
  ngOnInit():void{
    // debugger
    this.taskList = this.modifyService?.viewTask();
    console.log(this.taskList);
    
  }
// delete(i){
//   this.taskList.splice(i,1)
// }
  
  onDeleteTask(index:number){
     this.modifyService.deleteTask(index);
    // console.log(title,description);
    
    
  }
  onEditTask(index:number){
    // this.modifyService.editTask(index);
    // console.log(this.modifyService.editTask());
    let currentTask = this.taskList.find((p) => {return p.id === index});
    console.log(currentTask);
    
    
   
 }
    
}
