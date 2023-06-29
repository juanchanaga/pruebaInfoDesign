import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TramosComponent } from './components/tramos/tramos.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { TramosClienteComponent } from './components/tramos-cliente/tramos-cliente.component';

import { GraphicsService } from './services/graphics.service'
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TramosComponent,
    ClienteComponent,
    TramosClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    GraphicsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
