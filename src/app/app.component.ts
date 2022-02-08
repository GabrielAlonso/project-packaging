import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project-packaging';
  transferency: any;

  transfer($event) {
    this.transferency = $event;
  }
}
