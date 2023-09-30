import { Component } from '@angular/core';
import { Iperson, Iplayers } from './models/persons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ourFirstProject';

  skills : string[] = ['html', 'css', 'js', 'node js', 'Angular']
  players : string[] = ['kohli', 'dhoni', 'prannoy', 'sharat kamal', 'sunil chhetrti']
  sports : string[] = ['cricket', 'football', 'Table-Tennis', 'Badminton', 'Squash']
  sportComp : string[] = ['reebok', 'puma', 'adidas', 'Yonex', 'Nike']
  cars : string[] = ['Audi R8', 'BMW-Q3', 'Mustang', 'Mercedes-BENZ', 'Lamborgini']

  pName = 'Samsung23';
  Iphone = 'Iphone 15 Pro'

  persons : Array<Iperson> = [
    {
      fname : 'Jhon',
      lname : 'Doe',
      contact : 6546363232,
      email : 'jhon@gmail.com'
    },
    {
      fname : 'Jen',
      lname : 'Clarke',
      contact : 7546363456,
      email : 'jen@gmail.com'
    },
    {
      fname : 'siya',
      lname : 'agarwal',
      contact : 8746363296,
      email : 'siya@gmail.com'
    }
  ]

  players2 : Array<Iplayers> = [
    {
      name : 'Virat Kohli',
      sport : 'Cricket',
      jersey_Num : 18,
      country : 'India'
    },
    {
      name : 'Christiano Ronaldo',
      sport : 'Football',
      jersey_Num : 7,
      country : 'Portugal'
    },
    {
      name : 'Roger Federer',
      sport : 'Lawn-Tennis',
      jersey_Num : 8,
      country : 'Switzerland'
    },
    {
      name : 'H S Prannoy',
      sport : 'Badminton',
      jersey_Num : 1,
      country : 'Switzerland'
    },
  ]
  constructor(){

  }
}


