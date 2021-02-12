import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnChanges {
  @Input() childData: string = '';
  @Input() counter: number = 0;
  @Output() messageEvent: EventEmitter<string> = new EventEmitter<string>();
  childMessage = 'Hello father, Im doing good. (using viewChild)';

  constructor() {}

  ngOnInit(): void {}

  receiveMessage($event: any) {
    this.childMessage = $event;
  }

  ngOnChanges(change: SimpleChanges): void {
    console.log('previous===', change.counter.previousValue);
    console.log('current===', change.counter.currentValue);
  }
}
