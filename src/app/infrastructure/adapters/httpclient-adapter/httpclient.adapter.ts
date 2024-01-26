import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { API_URL_POCKET } from '../../helpers/constants';
import { PocketModel } from '../../../domain/models/pocket/pocket.model';
import { PocketGateway } from '../../../domain/models/pocket/pocket.gateway';

@Injectable({ providedIn: 'root' })
export class HttpClientAdapter extends PocketGateway {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getS(): Observable<PocketModel[] | null> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
        'Access-Control-Allow-Origin, Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
      }),
    };
    return this.httpClient.get<PocketModel[] | null>(API_URL_POCKET, httpOptions).pipe(
      catchError((err) => {
        this.error(err);
        return of(null);
      })
    );
  }

  private error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
