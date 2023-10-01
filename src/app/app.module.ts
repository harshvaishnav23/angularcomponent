import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { StudentsComponent } from './students/students.component';
import { FormsModule } from '@angular/forms';
import { TabComponent } from './tab/tab.component';
import { PostsComponent } from './posts/posts.component';
import { MobileComponent } from './mobile/mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent, 
    StudentsComponent, 
    TabComponent, PostsComponent, MobileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
