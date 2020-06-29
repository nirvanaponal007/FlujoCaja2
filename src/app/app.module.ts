import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//- NgModel vive aqui

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { ListaComponent } from './lista/lista.component';




@NgModule({
  declarations: [
    AppComponent,
    IngresosComponent,
    ListaComponent
    
   
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
