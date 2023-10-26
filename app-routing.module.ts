import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { CartComponent } from './Components/cart/cart.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';

import { CategoriesComponent } from './Components/categories/categories.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AuthGuard } from './Guards/auth.guard';
import { ProductsComponent } from './Components/products/products.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ForgetpasswordComponent } from './Components/forget-password/forgetpassword.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path:'forgetpassword', component:ForgetpasswordComponent},

  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'cart', canActivate: [AuthGuard], component: CartComponent },
  { path: 'wishlist', canActivate: [AuthGuard], component: WishlistComponent},
  { path: 'allOrders', canActivate: [AuthGuard], component: AllOrdersComponent },
  { path: 'products', canActivate: [AuthGuard], component: ProductsComponent },
  { path: 'product/:id', canActivate: [AuthGuard], component: ProductDetailsComponent },
  { path: 'categories', canActivate: [AuthGuard], component: CategoriesComponent },
  { path: 'brands', canActivate: [AuthGuard], component: BrandsComponent },
  { path: 'checkout/:cartId', canActivate: [AuthGuard], component: CheckoutComponent },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule) },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
