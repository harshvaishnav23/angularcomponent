import { Component } from "@angular/core";



@Component({
    selector : "app-products",
    templateUrl : "./products.component.html",
    styleUrls : ['./products.component.scss']
})

export class ProductsComponent {

    skills : string[] = ['html', 'css', 'js', 'node js', 'Angular']
    players : string[] = ['kohli', 'dhoni', 'prannoy', 'sharat kamal', 'sunil chhetrti']
    sports : string[] = ['cricket', 'football', 'Table-Tennis', 'Badminton', 'Squash']
    sportComp : string[] = ['reebok', 'puma', 'adidas', 'Yonex', 'Nike']
    cars : string[] = ['Audi R8', 'BMW-Q3', 'Mustang', 'Mercedes-BENZ', 'Lamborgini']
    constructor(){
        
    }
}




