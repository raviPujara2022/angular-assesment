import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  pokemonDetail: any = [];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.pokemonDetail = JSON.parse(localStorage.getItem('pokemonDetail') as any) || [];
    this.getDetails();
  }

  getDetails() {
    this.subscription = this.commonService.selectedItem.subscribe(
      (res: any) => {
        res[
          'imageUrl'
        ] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${res.species.url.split('/pokemon-species/')[1].split('/')[0]
          }.png`;
        this.pokemonDetail = res;
        localStorage.setItem('pokemonDetail', JSON.stringify(res));
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
