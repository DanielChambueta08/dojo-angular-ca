import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TareaModel } from "src/app/domain/models/tarea/tarea.model";
import { TareaUsecase } from "src/app/domain/usecases/tarea/tarea.usecase";

@Injectable()
export class TareasListSandbox {
  public tareas!: Observable<TareaModel[] | null>;

  constructor(private tareaUseCase: TareaUsecase) {}

  listarTareas(){
    this.tareas = this.tareaUseCase.listarTareasUC();
  }
}
