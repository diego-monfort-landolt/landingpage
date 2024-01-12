import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  @Input() name = 'Diego';
  
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
