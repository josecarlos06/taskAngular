import { Injectable } from "@angular/core";
import { tarea } from '../interfaces/task.interface';



@Injectable()

export class taskService{
    private _listados : tarea []= [
        {
            title : 'comer',
            descriptio : 'Debo de comer 5 veces al dia'
        },
        {
            title : 'deber',
            descriptio : 'Debo de deber 1 veces al dia'
        }
    ];

    get listados(): tarea[] {
        return[...this._listados]
    };

    agregarListado(listado:tarea){
        // this._listados = [...this._listados, listado]
        this._listados.push(listado)
    };
}
