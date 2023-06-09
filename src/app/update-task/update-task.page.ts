import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {
  task;
  categories =['work', 'personal']
  categorySelectedCategory
  
  newTaskObj = {}
  itemName
  itemDueDate 
  itemPriority
  itemCategory
  newCategory: any;

  constructor(public modalCtlr:ModalController, public todoServive:TodoService) { }

  ngOnInit() {
    /*this.categories.push('work')
    this.categories.push('personal')*/

    this.itemName = this.task.value.itemName
    this.itemDueDate = this.task.value.itemDueDate
    this.itemPriority = this.task.value.itemPriority
    this.categorySelectedCategory = this.task.value.itemCategory

  }
  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }
  
  handleNewButtonClick() {
    if (this.newCategory && !this.categories.includes(this.newCategory)) {
       //this.categories.push('new');
      this.categories.push(this.newCategory);
      this.newCategory = ''; 
    }
  }

  async dismis(){
    await this.modalCtlr.dismiss()
  }

  async update(){
    this.newTaskObj = ({itemName:this.itemName, itemDueDate:this.itemDueDate, itemPriority:this.itemPriority,itemCategory:this.categorySelectedCategory})
    let uid = this.task.key
    await this.todoServive.updateTask(uid,this.newTaskObj)
    this.dismis()
  }


}
