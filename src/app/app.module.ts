import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';

import { MenuComponent } from './menu/menu.component';
import { PlatModule } from './plat/plat.module';
import { CommandeModule } from './commande/commande.module';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './shared/footer/footer.component';
import { EmployeesService } from './services/employees.service';
import { CommonModule } from '@angular/common';
import { EmployeModule } from './employe/employe.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    MenuComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommandeModule,
    SharedModule,
    CommonModule,
    PlatModule,
    EmployeModule,
    ReactiveFormsModule
    
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
