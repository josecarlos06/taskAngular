import { Component, Input} from '@angular/core';
import { tarea } from '../interfaces/task.interface';
import { taskService } from '../services/task.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent{

  @Input() lista: tarea ={
    title : '',
    descriptio : '',
  }
  constructor(private taskService: taskService){}
  agregar(){
    if(this.lista.title === '' || this.lista.descriptio === ''){
      return
    }
    this.taskService.agregarListado(this.lista);
    this.lista = {
      title : '',
      descriptio : '',
    }
  }
}
