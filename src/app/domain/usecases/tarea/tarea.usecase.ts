import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TareaModel } from '../../models/tarea/tarea.model';
import { TareaGateway } from '../../models/tarea/tarea.gateway';


@Injectable()
export class TareaUsecase {

  constructor(private tareaGateway: TareaGateway) { }

  listarTareasUC(): Observable<TareaModel[] | null> {
    return this.tareaGateway.listarTareasG();
  }

  crearTareaUC(tarea: TareaModel): Observable<TareaModel | null> {
    return this.tareaGateway.crearTareaG(tarea);
  }
}
