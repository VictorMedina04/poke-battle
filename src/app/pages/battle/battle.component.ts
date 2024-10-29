import { Component } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrl: './battle.component.css'
})
export class BattleComponent {

  pokemonTurn = 1;
  pokemonPlayer1Id :number;
  pokemonPlayer2Id : number;
  lifePokemon1 = 100;
  lifePokemon2 = 100;

  constructor() {
    this.pokemonPlayer1Id = this.getRandomPokemonId();
    this.pokemonPlayer2Id = this.getRandomPokemonId();
  }

  getRandomPokemonId(): number {
    const min = 1;
    const max = 151; // Assuming the range is from 1 to 151
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

}
