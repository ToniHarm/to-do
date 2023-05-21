import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})

export class AddNewTaskPage implements OnInit {
  categories = ['work', 'personal','home']
  categorySelectedCategory;

  taskName;        
  taskDate;
  taskPriority;
  taskCategory;

  taskObject = {};
newCategory: any;
 

  constructor(public modalCtrl:ModalController, public todoService:TodoService) {}

  ngOnInit() {}
  
  selectedCategory(index){
    this.taskCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  addCategory() {
    if (this.newCategory && !this.categories.includes(this.newCategory)) {
      this.categories.push(this.newCategory);
      this.newCategory = ''; // Clear the input field
    }
  }

  async AddTask(){
    this.taskObject = ({itemName:this.taskName, 
                        itemDueDate:this.taskDate,
                        itemPriority:this.taskPriority,
                        itemCategory:this.taskCategory })
    console.log(this.taskObject);
    let uid = this.taskName + this.taskDate;
    
    if (uid){
      await this.todoService.addTask(uid,this.taskObject)
    }else {
      console.log("can't save empty task");
    }
    

    this.dismis()
  }
  
  async dismis(){
    await this.modalCtrl.dismiss(this.taskObject)
  }
}
  
