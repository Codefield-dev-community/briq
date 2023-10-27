import { Directive, ElementRef, HostListener } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { debounceTime, take } from 'rxjs/operators';

@Directive({
    selector: '[briqScrolltoInvalidcontrol]'
})
export class BriqScrolltoInvalidcontrolDirective {
    constructor(
        private el: ElementRef,
        private formGroupDir: FormGroupDirective
    ) {
    }

    private static getTopOffset(controlEl: HTMLElement): number {
        const labelOffset = 50;
        return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
    }

    @HostListener('ngSubmit') onSubmit(): void {
        if (this.formGroupDir.control.invalid) {
            this.scrollToFirstInvalidControl();
        }
    }

    private scrollToFirstInvalidControl(): void {
        const firstInvalidControl: HTMLElement = this.el.nativeElement.querySelector('.ng-invalid');

        window.scroll({
            top: BriqScrolltoInvalidcontrolDirective.getTopOffset(firstInvalidControl),
            left: 0,
            behavior: 'smooth'
        });

        fromEvent(window, 'scroll')
            .pipe(debounceTime(100), take(1))
            .subscribe(() => firstInvalidControl.focus());
    }
}
