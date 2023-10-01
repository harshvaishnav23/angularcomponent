import { Component, OnInit } from "@angular/core";



@Component({
    selector : "app-products",
    templateUrl : "./products.component.html",
    styleUrls : ['./products.component.scss']
})

export class ProductsComponent implements OnInit{
    isFormValid : boolean = false;
    productStatus : string = `No Product is added !!!`
    productSearchValue : string = '' ; // now length is 0
    count = 0;
    constructor(){       
    }
    ngOnInit(): void {
        console.log('Components INIT')

        setInterval(() => {
            this.isFormValid = true
        }, 3000)     
    }

    onProductAdd(){
            console.log('Btn Clicked')
            this.count++;
            this.productStatus = `${this.count} Products are added to Cart !!!`
    }

    onRemoveProduct(){
        if(this.count === 0){
            return
        }
            
        if(this.count === 1){
            this.count--;
            this.productStatus = `No Products are in the cart!!!`
        }

        if(this.count > 1){
            this.count--;
            this.productStatus = `${this.count} Products are added to the cart !!!`
        }
    }

    onProductSearch(eve:Event){
        // console.log(eve)
        let val = (eve.target as HTMLInputElement).value;
        console.log(val)

        this.productSearchValue = val;
    }
}




