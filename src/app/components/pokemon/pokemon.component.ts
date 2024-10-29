import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonResponse } from '../../models/pokemon-response.interfaces';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {



  @Input() pokemonId: number | undefined;
  @Input() life: number = 100;
  pokemon: PokemonResponse | undefined;
  @Output() onAttackDone = new EventEmitter<number>();
  @Input() isMyTurn: boolean = false;
  showAnimation = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.pokemonId!).subscribe(pokemonResponse => {
      this.pokemon = pokemonResponse;
    });
  }
  getProgressBarColor(): string {
    if (this.life > 70) {
      return 'success';
    } else if (this.life > 30) {
      return 'warning';
    } else {
      return 'danger';
    }
  }
  doAttack() {
    var damage = Math.floor(Math.random() * (30 - 10) + 10) + 1;
    this.onAttackDone.emit(damage);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['life']) {
      if (changes['life'].firstChange == false) {
        this.showAnimation = true;
        setTimeout(() => {
          this.showAnimation = false;
        }, 500);
      }
    }
  }

}
