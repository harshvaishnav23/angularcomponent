import { Component } from "@angular/core";



@Component({
    selector : 'app-students',
    templateUrl : './students.component.html',
    styleUrls : ['./students.component.scss']
})

export class StudentsComponent {
    fname : string = 'Harsh';
    lname : string = 'Vaishnav';
    bgColor : string = 'orange'
    constructor(){

    } 
}