import { Component } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GameComponent, CardComponent ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  username = 'DiegoDev';
  isLoggedIn = false;
  greet() {
    alert('¡¡Not Open this Photo!!')
  }

}
