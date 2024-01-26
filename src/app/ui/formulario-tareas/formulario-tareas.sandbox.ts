import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TareaModel } from "src/app/domain/models/tarea/tarea.model";
import { TareaUsecase } from "src/app/domain/usecases/tarea/tarea.usecase";

@Injectable()
export class FormularioTareasSandbox {
  public nuevaTarea: TareaModel = { id: 0, titulo: '', descripcion: '', estado: ''};

  constructor(private tareaUseCase: TareaUsecase) {}

  crearTarea() {
    console.log(this.nuevaTarea);
    this.tareaUseCase.crearTareaUC(this.nuevaTarea).subscribe(
      (tareaAgregada) => {
        console.log('Tarea agregada:', tareaAgregada);
      },
      (error) => {
        console.error('Error al agregar tarea:', error);
      }
    );
  }
}
