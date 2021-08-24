import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ListingsComponent } from './listings/listings.component';
import { BookingsComponent } from './bookings/bookings.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PropertyComponent } from './property/property.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home/1', pathMatch: 'full' },

  { path: 'home/:locationId', component: HomeComponent, },
  
  { path: 'signin', component: SignInComponent, },
  
  { path: 'signup', component: SignUpComponent, },
  
  { path: 'listings', component: ListingsComponent, },
  
  { path: 'listings/:listFor', component: ListingsComponent, },
  
  { path: 'property', component: PropertyComponent, },
  
  { path: 'wishlist', component: WishlistComponent, },
  
  { path: 'bookings', component: BookingsComponent, },
  
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    FooterComponent,
    BookingsComponent,
    WishlistComponent,
    PropertyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
