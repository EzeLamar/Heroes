import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { HeroesService } from './components/Services/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroesComponent,
    HomeComponent,
    AboutComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
