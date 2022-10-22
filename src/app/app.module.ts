import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskModule } from './task/task.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  exports : [
  ],
  imports: [
    BrowserModule,
    TaskModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
