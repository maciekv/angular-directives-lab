import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ActionButtonComponent } from './action-button';

@Component({
  selector: 'app-root',
  template: `
    <app-action-button
      [active]="active"
      [disabled]="isSaving"
      (toggled)="onToggled($event)"
    >
      Action Button
    </app-action-button>
  `,
  imports: [
    ActionButtonComponent
  ]
})
export class App {
  active = true;
  isSaving = true;

  onToggled($event: unknown) {
    console.log($event)
  }
  
}

bootstrapApplication(App);
