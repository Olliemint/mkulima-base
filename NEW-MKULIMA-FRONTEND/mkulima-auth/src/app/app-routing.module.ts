import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ContactComponent } from './contact/contact.component';
import { FeedsComponent } from './feeds/feeds.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contacts', component: ContactComponent},
  { path: 'catalogue', component: CatalogueComponent},
  { path: 'feeds', component: FeedsComponent},
  { path: 'weather', component: WeatherComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
