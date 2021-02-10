import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() grandchildData: string = '';
  grandchildMessage = 'Hello father, Im doing good';
  @Output() messageEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  sendMessage() {
    this.messageEvent.emit(this.grandchildMessage);
  }
}
