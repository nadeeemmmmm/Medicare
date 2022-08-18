import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { ConnectService } from './connect.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AdminAddProductsComponent } from './admin-add-products/admin-add-products.component';
import { AdminViewProductsComponent } from './admin-view-products/admin-view-products.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { NewAdminComponent } from './new-admin/new-admin.component';
import { AdminViewMedicineComponent } from './admin-view-medicine/admin-view-medicine.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AdminMedicineByCategoryComponent } from './admin-medicine-by-category/admin-medicine-by-category.component';
import { AdminViewByNameComponent } from './admin-view-by-name/admin-view-by-name.component';
import { UserViewProductsComponent } from './user-view-products/user-view-products.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserViewMedicineComponent } from './user-view-medicine/user-view-medicine.component';
import { UserViewByCategoryComponent } from './user-view-by-category/user-view-by-category.component';
import { UserViewByNameComponent } from './user-view-by-name/user-view-by-name.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { OrderListComponent } from './order-list/order-list.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactComponent,
    HomeComponent,
    AdminLoginComponent,
    UserRegistrationComponent,
    AdminAddProductsComponent,
    AdminViewProductsComponent,
    AdminUpdateProductComponent,
    NewAdminComponent,
    AdminViewMedicineComponent,
    NewUserComponent,
    AdminMedicineByCategoryComponent,
    AdminViewByNameComponent,
    UserViewProductsComponent,
    UserCartComponent,
    UserViewMedicineComponent,
    UserViewByCategoryComponent,
    UserViewByNameComponent,
    ShippingAddressComponent,
    OrderListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
