import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { InfoSessionModel } from '@bancolombia/ngx-azure-session-manager';

import { HeaderComponent } from './header.component';
import { HeaderSandbox } from '../header.sandbox';
import { AuthenticationGateway } from '../../../domain/models/authentication/authentication.gateway';
import { mockMsal } from '../../../test/setup-test-msal';


const infoSession = { logged: true, profile: { name: 'Andres', username: 'Sam' } } as InfoSessionModel;

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let el: DebugElement;
  let authentication: AuthenticationGateway;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      providers: [
        { provide: AuthenticationGateway, useValue: mockMsal },
        HeaderSandbox,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    authentication = TestBed.inject(AuthenticationGateway);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logIn', () => {
    jest.spyOn(authentication, 'logIn').mockReturnValue(of(infoSession));
    component.logIn();
    expect(authentication.logIn).toHaveBeenCalled();
  });


  it('should logOut', () => {
    jest.spyOn(authentication, 'logOut').mockReturnValue(of(infoSession));
    component.logOut();
    expect(authentication.logOut).toHaveBeenCalled();
  });
});
