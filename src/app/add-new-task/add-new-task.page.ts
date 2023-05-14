import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories = ['work','personal', 'home']

  taskName
  taskDate
  taskPriority
  taskCategory

  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }
  async dismiss(){
    await this.modalCtrl.dismiss()
  }

  selectedCategory(index){
    this.taskCategory = this.categories[index]
  }
}
