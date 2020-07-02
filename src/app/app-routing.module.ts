import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path:"",
    loadChildren:() => import("./preauth/preauth.module").then(m=>m.PreauthModule)
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
    path:"add-to-cart",
    canActivate: [AuthGuard],
    loadChildren:()=> import("./postauth/postauth.module").then(m=>m.PostauthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
