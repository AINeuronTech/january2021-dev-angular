import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NumberBlocComponent } from './number-bloc/number-bloc.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { TopnavComponent } from './topnav/topnav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MembersOnlyComponent } from './members-only/members-only.component';
import { AuthGuard } from './auth.guard';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NumberBlocComponent,
    ProductListComponent,
    ProductComponent,
    TopnavComponent,
    NotFoundComponent,
    MembersOnlyComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
