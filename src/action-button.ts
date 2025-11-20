import { Component } from "@angular/core";
import { ActionStateDirective } from "./action-state.directive";

@Component({
    selector: 'app-action-button',
    template: `<ng-content></ng-content>`,
    standalone: true,
    imports: [],
    styles: [`
    :host {
        color: gray;
        cursor: pointer;
    }
    :host(.is-active) {
        color: green;

    }
    :host(.disabled) {
        background-color: lightgrey
    }
    `],
    host: {
        role: 'button',
    },
    hostDirectives: [
        {
            directive: ActionStateDirective,
            inputs: [ 
                'disabled: disabled',
                'active: active'
            ],
            outputs: [
                'toggled: toggled'
            ]
        }
    ]
})
export class ActionButtonComponent {


}