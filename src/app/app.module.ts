import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { FootbarComponent } from './footbar/footbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { ProductListComponent } from './products-container/product-list/product-list.component';
import { SearchFieldComponent } from './products-container/search-field/search-field.component';
import { ProductComponent } from './products-container/product-list/product/product.component';
import { FilterComponent } from './products-container/product-list/filter/filter.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, TopHeaderComponent, TopMenuComponent, ProductListComponent, FootbarComponent, SearchFieldComponent, ProductComponent, FilterComponent, AboutComponent, ProductsContainerComponent, HomeContainerComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,ReactiveFormsModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
