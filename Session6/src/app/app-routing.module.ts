import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { ProductAddComponent } from './components/product-add/product-add.component'
import { ProductViewComponent } from './components/product-view/product-view.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product-add', component: ProductAddComponent},
  {path: 'product-view', component: ProductViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
