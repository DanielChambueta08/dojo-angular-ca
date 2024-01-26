import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PocketModel } from '../../domain/models/pocket/pocket.model';
import { PocketUsecase } from '../../domain/usecases/pocket/pocket.usecase';


@Injectable()
export class PocketSandbox {

    public pockets$!: Observable<PocketModel[] | null>;

    constructor(private pocketUsecase: PocketUsecase) {}

    getS() {
        this.pockets$ = this.pocketUsecase.getS();
    }
}
