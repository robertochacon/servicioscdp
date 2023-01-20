import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarintoComponent } from './components/navbarinto/navbarinto.component';
import { LoginComponent } from './components/login/login.component';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { MapComponent } from './components/map/map.component';
import { EntitiesComponent } from './components/entities/entities.component';
import { UsersComponent } from './components/users/users.component';
import { MessengersShipmentsComponent } from './components/messengers-shipments/messengers-shipments.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersOutComponent } from './components/orders-out/orders-out.component';
import { SearchArticlePipe } from './components/orders/search-article.pipe';
import { AccountingComponent } from './components/accounting/accounting.component';
import { SettingComponent } from './components/setting/setting.component';
import { OrdersInvoicedComponent } from './components/orders-invoiced/orders-invoiced.component';
import { SellComponent } from './components/sell/sell.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    NavbarintoComponent,
    LoginComponent,
    SubmenuComponent,
    MessengerComponent,
    ShipmentsComponent,
    MapComponent,
    EntitiesComponent,
    UsersComponent,
    MessengersShipmentsComponent,
    ArticlesComponent,
    CategoriesComponent,
    OrdersComponent,
    OrdersOutComponent,
    SearchArticlePipe,
    AccountingComponent,
    SettingComponent,
    OrdersInvoicedComponent,
    SellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
