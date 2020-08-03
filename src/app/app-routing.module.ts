import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path:"",
    loadChildren:() => import("./preauth/preauth.module").then(m=>m.PreauthModule)
  },
  {
    path:"product-list/:id",
    loadChildren:() => import("./preauth/product-list/product-list.module").then(m=>m.ProductListModule)
  },
  {
    path:"product-list",
    loadChildren:() => import("./preauth/product-list/product-list.module").then(m=>m.ProductListModule)
  },
  {
    path:"product-details/:pid",
    loadChildren:() => import("./preauth/product-details/product-details.module").then(m=>m.ProductDetailsModule)
  },
  {
    path:"product-details",
    loadChildren:() => import("./preauth/product-details/product-details.module").then(m=>m.ProductDetailsModule)
  },
  {
    path:"add-to-cart",
    canActivate: [AuthGuard],
    loadChildren:()=> import("./postauth/postauth.module").then(m=>m.PostauthModule)
  },
  {
    path:"profile",
    canActivate: [AuthGuard],
    loadChildren:()=> import('./postauth/profile/profile.module').then(m=>m.ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
