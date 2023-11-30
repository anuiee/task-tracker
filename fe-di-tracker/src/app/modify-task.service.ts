import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModifyTaskService {

  task: any[] = [];

  addTask(title:string,description:string){
      this.task.push({'id':this.task.length,title:title,description:description});
  }
  viewTask():any[]{
    return this.task;

  }
  deleteTask(i:number){
    this.task.splice(i,1);
  }
  
  // editTask(i:string){
    
  //   return this.task.put(i.title,i.description);
  // }
}
