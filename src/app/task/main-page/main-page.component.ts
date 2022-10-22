import { Component} from '@angular/core';
import { tarea } from '../interfaces/task.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{
  lista: tarea ={
    title: '',
    descriptio :''
  }
}
