import { Component} from '@angular/core';
import { taskService } from '../services/task.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
})
export class TareasComponent{
  get listados(){
    return this.taskService.listados
  }
  constructor(private taskService: taskService){}
}
