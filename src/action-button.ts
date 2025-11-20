import { Component } from "@angular/core";
import { ActionStateDirective } from "./action-state.directive";

@Component({
    selector: 'app-action-button',
    template: `<button><ng-content></ng-content></button>`,
    standalone: true,
    imports: [],
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