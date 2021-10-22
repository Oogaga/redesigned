import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {AuthenticationComponent} from './routes/authentication/authentication.component';
import {HomeComponent} from './routes/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from './components/header/header.component';
import {RegistrationWithGoogleComponent} from './routes/authentication/registration-with-google/registration-with-google.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConditionComponent} from './routes/authentication/condition/condition.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

import {BASE_URL_TOKEN} from "./token";
import {environment} from "../environments/environment.prod-https";
import {GoogleOauth2Service} from "./services/google-oauth2.service";
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {RegistrationComponent} from './routes/authentication/registration/registration.component';
import {ForgotComponent} from './routes/forgot/forgot.component';
import {MatMenuModule} from "@angular/material/menu";
import {BioUniversalComponent} from './components/devices/bio-universal/bio-universal.component';
import {AuthGuard} from "./guards/auth.guard";
import {AdminHomeComponent} from './routes/admin/admin-home/admin-home.component';
import {BioPidComponent} from './components/devices/bio-pid/bio-pid.component';
import {AddNewDeviceComponent} from './components/devices/add-new-device/add-new-device.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {AddingDeviceComponent} from './components/adding-device/adding-device.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatStepperModule} from "@angular/material/stepper";
import {ChangeDateMsPipe} from "./pipes/change-date-ms.pipe";
import {DeviceSettingsComponent} from './components/settings/device-settings/device-settings.component';
import {NgxSliderModule} from '@angular-slider/ngx-slider';
import { DevicesComponent } from './components/devices/devices.component';
import {TokenInterceptor} from "./services/token-interceptor";
import { BaseItemComponent } from './components/devices/base-item/base-item.component';
import {MatRippleModule} from "@angular/material/core";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HomeComponent,
    HeaderComponent,
    RegistrationWithGoogleComponent,
    ConditionComponent,
    AuthLayoutComponent,
    RegistrationComponent,
    ForgotComponent,
    BioUniversalComponent,
    AdminHomeComponent,
    BioPidComponent,
    AddNewDeviceComponent,
    AddingDeviceComponent,
    ChangeDateMsPipe,
    DeviceSettingsComponent,
    DevicesComponent,
    BaseItemComponent
  ],
    imports: [
        BrowserModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatExpansionModule,
        MatDialogModule,
        MatStepperModule,
        NgxSliderModule,
        MatRippleModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatCheckboxModule
    ],
  providers: [
    AuthGuard,
    {
      provide: BASE_URL_TOKEN,
      useValue: environment.baseUrl
    },
    GoogleOauth2Service,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
