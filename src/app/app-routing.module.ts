import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonListComponent } from "./pages/components/Pokemon-list/pokemonList.component";
import { PokemonDetailComponent } from "./pages/components/pokemon-detail/pokemon-detail.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'pokemonList', pathMatch: 'full' },
    { path: 'pokemonList', component: PokemonListComponent },
    { path: 'pokemonDetail', component: PokemonDetailComponent },
    { path: '**', redirectTo: 'pokemonList', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}