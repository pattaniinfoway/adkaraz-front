import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injectable, ErrorHandler } from '@angular/core';
import * as Sentry from '@sentry/browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginOtpComponent } from './pages/login-otp/login-otp.component';
import { VerifyOtpComponent } from './pages/verify-otp/verify-otp.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyFavoritesComponent } from './pages/my-favorites/my-favorites.component';
import { MyAdsComponent } from './pages/my-ads/my-ads.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ChatComponent } from './pages/chat/chat.component';
import { PostAdComponent } from './pages/post-ad/post-ad.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
Sentry.init({
  environment: 'staging',
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    LoginOtpComponent,
    VerifyOtpComponent,
    ProfileComponent,
    MyFavoritesComponent,
    MyAdsComponent,
    ProductDetailsComponent,
    ChatComponent,
    PostAdComponent
  ],
  exports: [TranslateModule],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (HttpLoaderFactory),
            deps: [HttpClient]
        }
    }),
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
      { provide: ErrorHandler, useClass: SentryErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
