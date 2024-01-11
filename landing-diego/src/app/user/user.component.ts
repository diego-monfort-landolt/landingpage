import { Component } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GameComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'DiegoDev';
  isLoggedIn = true;

}
