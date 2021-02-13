import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Parent component';
  parentMessage = 'hello son, how are you';
  childMessage = '';
  counter = 0;

  constructor() {}

  receiveMessage($event: any) {
    this.childMessage = $event;
  }

  increament() {
    this.counter++;
  }

}
