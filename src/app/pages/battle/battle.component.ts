import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrl: './battle.component.css'
})
export class BattleComponent {

  pokemonTurn = 1;
  pokemonPlayer1Id = this.getRandomPokemonId();
  pokemonPlayer2Id = this.getRandomPokemonId();
  lifePokemon1 = 100;
  lifePokemon2 = 100;


  getRandomPokemonId(): number {
    const min = 1;
    const max = 151;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  applyDamage(damage: number) {
    if (this.pokemonTurn == 1) {
      this.lifePokemon2 -= damage;
      this.pokemonTurn = 2;
    } else {
      this.lifePokemon1 -= damage;
      this.pokemonTurn = 1;
    }
  }

  reiniciarBatalla() {
    this.lifePokemon1 = 100;
    this.lifePokemon2 = 100;
    this.pokemonTurn = 1;

  }
  handlePokemonChange(): void {
    this.pokemonTurn = this.pokemonTurn === 1 ? 2 : 1;
  }

}
