import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BriqLogin } from './briq-login';
import { BriqFormElement, BriqInputBuilder } from '../../form/dynamic-form/shared/briq-form-element';
import { BriqFormInputType } from '../../form/dynamic-form/form-elements/input/briq-input-builder.types';

@Component({
  selector: 'briq-login',
  templateUrl: './briq-login.component.html',
  styleUrls: ['./briq-login.component.scss']
})
export class BriqLoginComponent implements OnInit {
  @Input() public showError: boolean;
  @Input() public logo: string;
  @Output() public loginAttempt: EventEmitter<BriqLogin>;

  public loginForm: BriqFormElement[];

  constructor() {
    this.showError = false;
    this.logo = 'assets/img/matchlab.png';
    this.loginAttempt = new EventEmitter<BriqLogin>();
    this.loginForm = [];
  }

  public ngOnInit(): void {
    this.initLoginForm();
  }

  public login(login: BriqLogin): void {
    this.loginAttempt.emit(login);
  }

  private initLoginForm(): void {
    this.loginForm = [
      new BriqInputBuilder(
        'username',
        'username',
        'Gebruikersnaam'
      )
        .setPlaceholder('Vul een gebruikersnaam in')
        .setRequired(),
      // .setEmailValidator(),
      new BriqInputBuilder('password',
        'password',
        'Wachtwoord')
        .setInputType(BriqFormInputType.Password)
        .setPlaceholder('Vul een wachtwoord in')
        .setRequired()
    ];
  }
}
