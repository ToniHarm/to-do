import { Component } from '@angular/core';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //todoList = []
  todoList: { itemName: string; itemDueDate: Date; itemPriority: string; itemCategory: string; }[] = [];

  today : number = Date.now ()
  constructor(public modalCtrl:ModalController) {}
  
  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
    })

    modal.onDidDismiss().then(newTaskObj =>{
      console.log(newTaskObj.data);
      this.todoList.push (newTaskObj.data)
    })

    return await modal.present ()
  }

  delete (index) {
    this.todoList.splice(index,1)
  }
}
