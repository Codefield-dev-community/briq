import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BriqFormElement, BriqInputBuilder } from '@briq/form/dynamic-form/shared/briq-form-element';
import { BriqFormInputType } from '@briq/form/dynamic-form/form-elements/input/briq-input-builder.types';
import { Router } from '@angular/router';
import { LoginRoutes } from '@shared/types/routes.enum';
import { BriqSize } from '@briq/shared/classes/briq-size';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    @Input() showError: boolean;
    @Output() formSubmit: EventEmitter<any>;

    public forgotPasswordform: BriqFormElement[];
    public submittedForm: any;
    public iconSize: BriqSize;
    public send: boolean;
    public cta: string;
    public title: string;
    public text: string;
    public buttonText: string;
    public resend: boolean;

    constructor(
        private router: Router
    ) {
        this.showError = false;
        this.forgotPasswordform = [];
        this.iconSize = BriqSize.MEDIUM;
        this.formSubmit = new EventEmitter<any>();
        this.send = false;
        this.resend = false;
    }

    public ngOnInit(): void {
        this.initPasswordForm();
    }

    public submit(form: any): void {
        this.submittedForm = form;
        this.formSubmit.emit(form);
        this.send = true;
        this.cta = 'Super!';
        this.title = 'Jou aanvraag is succesvol verzonden.';
        this.text = 'Je ontvangt een e-mail om jouw wachtwoord opnieuw in te instellen. Geen mail ontvangen? Bekijk jouw spam box of verstuur hem opnieuw.';
        this.buttonText = 'Opnieuw versturen';
    }

    public reSubmit(): void {
        this.formSubmit.emit(this.submittedForm);
        this.resend = true;
    }

    public close(): void {
        this.router.navigate([LoginRoutes.LOGIN]);
    }

    private initPasswordForm(): void {
        this.title = 'Wachtwoord vergeten?';
        this.text = 'text';
        this.buttonText = 'Wachtwoord opnieuw instellen';

        this.forgotPasswordform = [
            new BriqInputBuilder('email', 'email', 'Vul het e-mail adres in van jouw account')
                .setInputType(BriqFormInputType.Email)
                .setPlaceholder('Naam@e-mail.nl')
                .setRequired()
                .setEmailValidator()
        ];
    }
}
