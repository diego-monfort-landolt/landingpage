import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  games = [
    {
      id: 1,
      name: 'Black Ops I'
    },
    {
      id: 2,
      name: 'Black Ops II'
    },
    {
      id: 3,
      name: 'Black Ops III'
    },
    {
      id: 4,
      name: 'Fortnite'
    },
  ]

}
