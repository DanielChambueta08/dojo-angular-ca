import { Observable } from 'rxjs';
import { PocketModel } from './pocket.model';

export abstract class PocketGateway {
  abstract getS(): Observable<PocketModel[] | null>;
}
