import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadcatogriesComponent } from './navbar/headcatogries/headcatogries.component';
import { ViewportComponent } from './navbar/viewport/viewport.component';
import { MenuComponent } from './navbar/viewport/menu/menu.component';
import { ProductviewComponent } from './navbar/viewport/productview/productview.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from  '@angular/common/http';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
   
    HeadcatogriesComponent,
        ViewportComponent,
        MenuComponent,
        ProductviewComponent,
  
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
   DropDownListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
