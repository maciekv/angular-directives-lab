import { Directive, ElementRef, EventEmitter, inject } from "@angular/core";

@Directive({
    selector: '[appActionState]',
    standalone: true,
    inputs: ['disabled', 'active'],
    outputs: ['toggled'],
    exportAs: 'actionState',
    host: {
        '[class.is-active]': 'active',
        '[attr.disabled]': 'disabled && _supportedDisabled ? "" : null',
        '(click)': 'onClick()'
    }
})
export class ActionStateDirective {
    disabled = false;
    active = true;
    toggled = new EventEmitter<boolean>();

    private readonly el = inject<ElementRef<HTMLElement>>(ElementRef<ElementRef>);

    get _supportedDisabled() {
        const tag = this.el.nativeElement.tagName;
        return ['INPUT', 'BUTTON'].includes(tag);
    }

    onClick(): void {
        if (this.disabled) return;
        this.active = !this.active;
        this.toggled.emit(this.active)
    }


}