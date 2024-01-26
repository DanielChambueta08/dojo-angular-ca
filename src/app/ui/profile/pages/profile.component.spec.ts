import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileSandbox } from '../profile.sandbox';

import { ProfileComponent } from './profile.component';

fdescribe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let profileSandbox: ProfileSandbox;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      providers: [
        ProfileSandbox
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    profileSandbox = TestBed.inject(ProfileSandbox);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
