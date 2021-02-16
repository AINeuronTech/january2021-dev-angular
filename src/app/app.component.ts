import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

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
  @ViewChild(ProductsComponent) child: any;

  constructor() {}

  receiveMessage($event: any) {
    this.childMessage = $event;
  }

  increament() {
    this.counter++;
  }

  //ngAfterViewInit() {
  //  this.childMessage = this.child.childMessage;
  //}
}
