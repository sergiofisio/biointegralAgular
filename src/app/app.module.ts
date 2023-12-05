import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ApresentationComponent } from './components/apresentation/apresentation.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { ButtonComponent } from './components/button/button.component';
import { NowusComponent } from './components/nowus/nowus.component';
import { PeopleComponent } from './components/nowus/people/people.component';
import { ServicesComponent } from './components/services/services.component';
import { CardComponent } from './components/services/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/footer/form/form.component';
import { MapsComponent } from './components/maps/maps.component';
import { LocalComponent } from './components/maps/local/local.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { InputComponent } from './components/footer/form/input/input.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HamburgerMenuComponent } from './components/header/navigation/hamburger-menu/hamburger-menu.component';
import { MenuItemComponent } from './components/header/navigation/hamburger-menu/menu-item/menu-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ApresentationComponent,
    NavigationComponent,
    ButtonComponent,
    NowusComponent,
    PeopleComponent,
    ServicesComponent,
    CardComponent,
    FooterComponent,
    FormComponent,
    MapsComponent,
    LocalComponent,
    InputComponent,
    HamburgerMenuComponent,
    MenuItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
