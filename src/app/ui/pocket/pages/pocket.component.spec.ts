import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { BcCardDirective } from '@bancolombia/design-system-web/bc-card';
import { setupPockets } from '../../../test/setup-test-data-pockets';
import { PocketComponent } from './pocket.component';
import { PocketSandbox } from '../pocket.sandbox';
import { PocketUsecase } from '../../../domain/usecases/pocket/pocket.usecase';
import { PocketGateway } from '../../../domain/models/pocket/pocket.gateway';
import { HttpClientAdapter } from '../../../infrastructure/adapters/httpclient-adapter/httpclient.adapter';

describe('PocketComponent', () => {
  let component: PocketComponent;
  let fixture: ComponentFixture<PocketComponent>;
  let el: DebugElement;
  let pocketSandbox: PocketSandbox;
  let pocketUsecase: PocketUsecase;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientTestingModule
      ],
      declarations: [PocketComponent, BcCardDirective],
      providers: [ 
        PocketSandbox, 
        PocketUsecase,
        { provide: PocketGateway, useClass: HttpClientAdapter }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocketComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    pocketSandbox = TestBed.inject(PocketSandbox);
    pocketUsecase = TestBed.inject(PocketUsecase);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('load pockets', () => {
    const pockets = setupPockets();
    jest.spyOn(pocketUsecase, 'getS').mockReturnValue(of(pockets));
    fixture.detectChanges();

    const cards = el.queryAll(By.css('.bc-card'));
    expect(cards.length).toBe(4);
  });
});
