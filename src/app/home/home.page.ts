import { TodoService } from './../todo.service';
import { Component } from '@angular/core';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { ModalController } from '@ionic/angular';
import { UpdateTaskPage } from '../update-task/update-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList: any[] = [];

  today : number = Date.now()

  constructor(public modalCtrl:ModalController, public todoService:TodoService) {
    this.getAllTask()
  }
  
  async addNewItem(){
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage,
    })

    modal.onDidDismiss().then(newTask =>{
      this.getAllTask()
    })
    
    return await modal.present ()
  }

  getAllTask(){
    this.todoList = this.todoService.getAllTasks()
    console.log(this.todoService.getAllTasks());
  }

  delete (key) {
    this.todoService.deleteTask(key)
    this.getAllTask()
  }

  async update(selectedTask){
    const modal = await this.modalCtrl.create({
      component: UpdateTaskPage,
      componentProps: {task: selectedTask}
    })

  modal.onDidDismiss().then(()=>{
    this.getAllTask()
  })

  return await modal.present()
  }
}
