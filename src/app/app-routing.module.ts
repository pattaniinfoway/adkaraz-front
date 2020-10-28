import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginOtpComponent } from './pages/login-otp/login-otp.component';
import { VerifyOtpComponent } from './pages/verify-otp/verify-otp.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyFavoritesComponent } from './pages/my-favorites/my-favorites.component';
import { MyAdsComponent } from './pages/my-ads/my-ads.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ChatComponent } from './pages/chat/chat.component';
import { PostAdComponent } from './pages/post-ad/post-ad.component';

const routes: Routes = [
	{ path: '', component: HomePageComponent, data: { breadcrumb: 'Home' } },
	{ path: 'login', component: LoginComponent, data: { breadcrumb: 'Login' } },
	{ path: 'signup', component: SignupComponent, data: { breadcrumb: 'Signup' } },
	{ path: 'forgot-password', component: ForgotPasswordComponent, data: { breadcrumb: 'Forgot Password' } },
	{ path: 'otp-login', component: LoginOtpComponent, data: { breadcrumb: 'Login with otp' } },
	{ path: 'verify-otp', component: VerifyOtpComponent, data: { breadcrumb: 'Verify otp' } },
	{ path: 'profile', component: ProfileComponent, data: { breadcrumb: 'Profile' } },
	{ path: 'my-favorites', component: MyFavoritesComponent, data: { breadcrumb: 'My Favorites' } },
	{ path: 'my-ads', component: MyAdsComponent, data: { breadcrumb: 'My Ads' } },
	{ path: 'chat', component: ChatComponent, data: { breadcrumb: 'Chat' } },
	{ path: 'post-ad', component: PostAdComponent, data: { breadcrumb: 'Post Ad' } },
	{ path: 'product-details', component: ProductDetailsComponent, data: { breadcrumb: 'Product Details' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
