import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-bloc',
  templateUrl: './number-bloc.component.html',
  styleUrls: ['./number-bloc.component.scss']
})
export class NumberBlocComponent implements OnInit {

  viewMode = 'all';
  allNumbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];
  primeNumbers: number[] = [];
  tenNumbers: number[] = [];

  constructor() {
    this.allNumbers = [...Array(100).keys()];

   }

  ngOnInit(): void {
    this.evenNumbers = this.allNumbers.filter((number) => number % 2 === 0);
    this.oddNumbers = this.allNumbers.filter((number) => number % 2 !== 0);
    this.tenNumbers = this.allNumbers.filter((number) => number % 10 === 0);
    this.primeNumbers = this.allNumbers.filter((number) => {
      for (var i = 2; i<= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
  }

}
