import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PocketModel } from '../../models/pocket/pocket.model';
import { PocketGateway } from '../../models/pocket/pocket.gateway';


@Injectable()
export class PocketUsecase {

  constructor(private pocketGateway: PocketGateway) { }
  
  getS(): Observable<PocketModel[] | null> {
    return this.pocketGateway.getS();
  }

}
