import { Directive, ElementRef, EventEmitter, HostListener, OnDestroy, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class BriqClickOutsideDirective implements OnDestroy {
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(target: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }

  ngOnDestroy(): void {
    // @TODO:: remove eventlisteners on current element
  }
}
