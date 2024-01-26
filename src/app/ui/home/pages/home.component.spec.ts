import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationGateway } from '../../../domain/models/authentication/authentication.gateway';

import { HomeSandbox } from '../home.sandbox';
import { HomeComponent } from './home.component';
import { mockMsal } from '../../../test/setup-test-msal';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;
  let homeSandbox: HomeSandbox;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      providers: [
        { provide: AuthenticationGateway, useValue: mockMsal },
        HomeSandbox,
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    homeSandbox = TestBed.inject(HomeSandbox);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
