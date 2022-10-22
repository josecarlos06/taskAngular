import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgregarComponent } from './agregar/agregar.component';
import { TareasComponent } from './tareas/tareas.component';
import { MainPageComponent } from './main-page/main-page.component';
import { taskService } from './services/task.service';



@NgModule({
  declarations: [
    AgregarComponent,
    TareasComponent, 
    MainPageComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  providers :[
    taskService
  ]

})
export class TaskModule { }
