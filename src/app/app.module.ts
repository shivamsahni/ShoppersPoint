import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MenubarModule} from 'primeng/menubar';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DataViewModule} from 'primeng/dataview';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {BadgeModule} from 'primeng/badge';
import {TooltipModule} from 'primeng/tooltip';
import {CarouselModule as Carouselng} from 'primeng/carousel';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CartComponent } from './order/cart/cart.component';
import { CheckoutComponent } from './order/checkout/checkout.component';
import { ToastrModule } from 'ngx-toastr';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { CartItemComponent } from './order/cart/cart-item/cart-item.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    CheckoutComponent,
    ProductItemComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MenubarModule,
    TabViewModule,
    ButtonModule,
    InputTextModule,
    DataViewModule,
    InputNumberModule,
    DropdownModule,
    InputTextareaModule,
    BadgeModule,
    Carouselng,
    TooltipModule,
    [CarouselModule.forRoot()],
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
