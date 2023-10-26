import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ProductComponent } from './Components/product/product.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component'
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeSliderComponent } from './Components/home-slider/home-slider.component';
import { CategorySliderComponent } from './Components/category-slider/category-slider.component';
import { BuyPipe } from './Pipes/buy.pipe';
import { SeeMorePipe } from './Pipes/see-more.pipe';
import { SearchPipe } from './Pipes/search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { AddHeaderInterceptor } from './Interceptors/add-header.interceptor';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { ForgetpasswordComponent } from './Components/forget-password/forgetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotfoundComponent,
    ProductDetailsComponent,
    CartComponent,
    BrandsComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductComponent,
    CheckoutComponent,
    AllOrdersComponent,
    HomeSliderComponent,
    CategorySliderComponent,
    BuyPipe,
    SeeMorePipe,
    SearchPipe,
    WishlistComponent,
    ForgetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    CarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
