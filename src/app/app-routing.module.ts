import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'app-about',
    component: AboutComponent,
    data: { title: 'This is KickCart' }
  },

  {
    path: 'app-products-container',
    component: ProductsContainerComponent,
    // canActivate: [AuthGuard]
  },


  {
    path: 'app-home-container',
    component: HomeContainerComponent,
    //  children: [
    //   { path: 'featured', component: FeaturedProductsComponent },
    //   { path: 'new', component: NewArrivalsComponent }
    // ]
  },



  {
    path: '',
    redirectTo: 'app-home-container',
    pathMatch: 'full'
  }, 
  
  {
    path: '**',
    component: NotFoundComponent
  },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


