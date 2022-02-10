import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project-packaging';
  transferencies: any[] = [];

  transfer($event) {
    console.log($event);
    const tranferency = {...$event, dateTransfer: new Date()};
    this.transferencies.push(tranferency);
  }
}
