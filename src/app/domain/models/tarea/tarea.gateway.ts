import { Observable } from 'rxjs';
import { TareaModel } from './tarea.model';

export abstract class TareaGateway {
  abstract listarTareasG(): Observable<TareaModel[] | null>;
}
