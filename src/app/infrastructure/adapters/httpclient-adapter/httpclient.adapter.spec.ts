import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { API_URL_POCKET } from '../../helpers/constants';
import { pocketsData } from '../../../test/db-data';
import { HttpClientAdapter } from './httpclient.adapter';

describe('HttpClientAdapter', () => {
  let service: HttpClientAdapter, httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClientAdapter],
    });

    service = TestBed.inject(HttpClientAdapter);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should retrieve all pockets', () => {
    service.getS().subscribe((pockets) => {
      expect(pockets).toBeTruthy();
      expect(pockets?.length).toBe(4);

      const pocket = pockets?.find((pocket) => pocket.id === '2');
      expect(pocket?.name).toBe('Imprevistos');
    });

    const req = httpTestingController.expectOne(API_URL_POCKET);
    expect(req.request.method).toEqual('GET');
    req.flush(pocketsData);
  });

  it('should retrieve null', () => {
    const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
    const data = 'Invalid request parameters';

    service.getS().subscribe((pockets) => {
      expect(pockets).toBeNull();
    });

    const req = httpTestingController.expectOne(API_URL_POCKET);
    expect(req.request.method).toEqual('GET');
    req.flush(data, mockErrorResponse);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
