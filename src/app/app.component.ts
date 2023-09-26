import { Component } from '@angular/core';
import { Iperson } from './models/persons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ourFirstProject';

  persons : Array<Iperson>= [
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
  constructor(){

  }
}


