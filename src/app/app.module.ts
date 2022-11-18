import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule,PaginationConfig } from 'ngx-bootstrap/pagination';
import { PokemonDetailComponent } from './pages/components/pokemon-detail/pokemon-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule } from '@angular/forms';
import { PokemonListComponent } from './pages/components/Pokemon-list/pokemonList.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PaginationModule,
    AppRoutingModule,
    FormsModule,
    TypeaheadModule.forRoot()

  ],
  providers: [PaginationConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
