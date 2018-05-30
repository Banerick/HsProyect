import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { CartasService } from './cartas.service';
import { FiltroPipe } from './filtro.pipe';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CartasComponent } from './cartas/cartas.component';
import { ExpansionesComponent } from './expansiones/expansiones.component';
import { ClasesComponent } from './clases/clases.component';
import { InfoClaseService} from './info-clase.service';
import {ConfigService} from './config.service';
import { DetalleComponent } from './detalle/detalle.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cards', component: CartasComponent },
  { path: 'classes', component: ClasesComponent },
  { path: 'expansions', component: ExpansionesComponent },
  { path: 'home', component: HomeComponent},
  { path: 'detalle/:cartaId', component: DetalleComponent},
  {path: '*', component: HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CuerpoComponent,
    CabeceraComponent,
    PieComponent,
    FiltroPipe,
    HomeComponent,
    CartasComponent,
    ExpansionesComponent,
    ClasesComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CartasService, InfoClaseService, ConfigService],
  bootstrap: [AppComponent]
})

export class AppModule {}

