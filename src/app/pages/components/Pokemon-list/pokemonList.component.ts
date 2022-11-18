import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { threadId } from 'worker_threads';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemonList.component.html',
  styleUrls: ['./pokemonList.component.scss'],
})
export class PokemonListComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  pokemonListData: any;
  filterData: any = [];
  searchString: string = '';
  pokemonList: any = [];
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.getIntialData();
  }

  getIntialData() {
    this.commonService.getSearchData().subscribe((res: any) => {
      this.pokemonListData = res.results;
      this.pokemonListData.map((data: any) => {
        data[
          'imageUrl'
        ] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.url.split('/pokemon/')[1].split('/')[0]
        }.png`;
      });
      this.pokemonList = this.pokemonListData.slice(0, 20)
    });
  }

  pageChanged(event: PageChangedEvent) {
    this.pokemonList = this.pokemonListData.slice((event.page - 1) * event.itemsPerPage, event.page * event.itemsPerPage);
  }

  search() {
    if (this.searchString.length > 2) {
      this.pokemonListData.filter((val: any) => {
        if (val.name.includes(this.searchString)) {
          this.filterData.push(val.name)
        }
      });
    }
    if (!this.searchString.length) {
      this.pokemonList = this.pokemonListData.splice(0, 20)
    }
  }

  onSelect(data: any) {
    this.pokemonList = [];
    let filter = this.pokemonListData.find((res: any) => res.name === data.value);
    if (filter !== undefined) {
      this.pokemonList.push(filter);
    }
    if (this.searchString === null) {
      this.pokemonList = this.pokemonListData;
    }
  }

  onPokemonClick(url: string) {
    this.commonService.getDataSelectedItem(url).subscribe((res: any) => {
      this.commonService.selectedItem.next(res);
    });
    this.router.navigate(['/pokemonDetail']);
  }
}
