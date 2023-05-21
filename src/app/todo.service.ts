import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private storage: Storage) {
    this.init()
   }

  addTask(key, value){
    this.storage.set(key,value)
  }

  deleteTask(key,value){
    this.storage.set(key,value)
  }

  updateTask(key: string, value: any) {
    return this.storage.set(key, value);
  }

  getAllTasks(){
    let tasks: any = []
    this.storage.forEach((key, value) => {
      tasks.push({'key':value, 'value':key})
    });
    return tasks
  }

  async init(){
    await this.storage.create()
  }
}
