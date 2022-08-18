import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminAddProductsComponent } from './admin-add-products/admin-add-products.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminMedicineByCategoryComponent } from './admin-medicine-by-category/admin-medicine-by-category.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';
import { AdminViewByNameComponent } from './admin-view-by-name/admin-view-by-name.component';
import { AdminViewMedicineComponent } from './admin-view-medicine/admin-view-medicine.component';
import { AdminViewProductsComponent } from './admin-view-products/admin-view-products.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewAdminComponent } from './new-admin/new-admin.component';
import { NewUserComponent } from './new-user/new-user.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserViewByCategoryComponent } from './user-view-by-category/user-view-by-category.component';
import { UserViewByNameComponent } from './user-view-by-name/user-view-by-name.component';
import { UserViewMedicineComponent } from './user-view-medicine/user-view-medicine.component';
import { UserViewProductsComponent } from './user-view-products/user-view-products.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"admin",component:AdminComponent},
  {path:"adminLogin",component:AdminLoginComponent},
  {path:"userRegistration",component:UserRegistrationComponent},
  {path:"aboutUs",component:AboutUsComponent},
  {path:"contact",component:ContactComponent},
  {path:"adminAddProducts",component:AdminAddProductsComponent},
  {path:"adminViewProducts",component:AdminViewProductsComponent},
  {path:"adminUpdateProducts/:id",component:AdminUpdateProductComponent},
  {path:"newAdmin",component:NewAdminComponent},
  {path:"adminViewMedicine/:id",component:AdminViewMedicineComponent},
  {path:"newUser",component:NewUserComponent},
  {path:"adminMedicineByCategory",component:AdminMedicineByCategoryComponent},
  {path:"adminViewByname",component:AdminViewByNameComponent},
  {path:"userViewProducts",component:UserViewProductsComponent},
  {path:"userCart",component:UserCartComponent},
  {path:"userViewMedicine/:id",component:UserViewMedicineComponent},
  {path:"userViewByCategory",component:UserViewByCategoryComponent},
  {path:"userViewByName",component:UserViewByNameComponent},
  {path:"shippingAddress",component:ShippingAddressComponent},
  {path:"orderList",component:OrderListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
