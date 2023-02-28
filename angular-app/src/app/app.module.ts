import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLibriComponent } from './lista-libri/lista-libri.component';
import { LibroDettagliComponent } from './libro-dettagli/libro-dettagli.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaLibriComponent,
    LibroDettagliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
