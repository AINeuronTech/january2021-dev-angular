import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imageUrl =
    'https://cdn23.picsart.com/142398382001201.jpeg?type=webp&to=min&r=640';
  public title = 'This is the home page';
  public name = 'Jack';
  public duration = 1;
  isAuthenticated = true;
  isActive = true;
  actionName = 'Aria enhancement';
  destinationUrl = 'http://google.com';
  alternativeUrl = 'In case google doesnt work, try with http://bing.com';
  public userName: string = 'david';
  public anything: number = 123;
  public clickCounter = 0;
  public isSpecial = false;
  public applystyle = true;
  constructor() {}

  ngOnInit(): void {
    console.log('Current value of username====', this.userName);
  }

  onClick() {
    this.clickCounter++;
    console.log('user just clicked');
  }

  toggleColor() {}

  onKeyPressed(event: any) {
    console.log('User pressed the ', event);
  }

  people: any[] = [
    {
      name: 'Douglas  Pace',
      age: 35,
    },
    {
      name: 'Mcleod  Mueller',
      age: 32,
    },
    {
      name: 'Day  Meyers',
      age: 21,
    },
    {
      name: 'Aguirre  Ellis',
      age: 34,
    },
    {
      name: 'Cook  Tyson',
      age: 32,
    },
  ];
}
