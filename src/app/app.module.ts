import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from 'primeng/toast';

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
import { HeaderFormComponent } from './page/form-page/header-form/header-form.component';
import { FormPageComponent } from './page/form-page/form-page.component';
import { FormPatientComponent } from './page/form-page/form-patient/form-patient.component';
import { QuestionsComponent } from './page/form-page/form-patient/step3/questions.component';
import { Step1Component } from './page/form-page/form-patient/step1/step1.component';
import { Step2Component } from './page/form-page/form-patient/step2/step2.component';
import { Step4Component } from './page/form-page/form-patient/step4/step4.component';
import { InputComponentFormPatient } from './page/form-page/form-patient/input/input/input.component';
import { InputSelectorFormPatientComponent } from './page/form-page/form-patient/input/input-selector-form-patient/input-selector-form-patient.component';
import { AdressComponent } from './page/form-page/form-patient/step1/adress/adress.component';

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
    InputComponentFormPatient,
    HamburgerMenuComponent,
    MenuItemComponent,
    HeaderFormComponent,
    FormPageComponent,
    FormPatientComponent,
    QuestionsComponent,
    Step1Component,
    Step2Component,
    Step4Component,
    InputSelectorFormPatientComponent,
    AdressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
