import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})

export class AddNewTaskPage implements OnInit {
  categories = ['work','personal']
  categorySelectedCategory

  newTaskObj = {}      
  itemName
  itemDueDate
  itemPriority
  itemCategory
  newCategory: any;
  constructor(public modalCtrl:ModalController, public todoService:TodoService) {}

  ngOnInit() {
    /*this.categories.push('work')
    this.categories.push('personal')*/
  }
  
  async add (){
    this.newTaskObj = ({itemName:this.itemName, itemDueDate:this.itemDueDate, itemPriority:this.itemPriority,itemCategory:this.categorySelectedCategory })
    console.log(this.newTaskObj);
    let uid = this.itemName + this.itemDueDate
    
    if(uid){
      await this.todoService.addTask(uid,this.newTaskObj)
    }else{
      console.log("can't save empty task");
    }


    this.dismis()
  }

  handleNewButtonClick() {
    if (this.newCategory && !this.categories.includes(this.newCategory)) {
       //this.categories.push('new');
      this.categories.push(this.newCategory);
      this.newCategory = ''; 
    }
  }
  selectCategory(index){
    this.categorySelectedCategory  = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismis(){
    await this.modalCtrl.dismiss(this.newTaskObj)
  }

}
  
