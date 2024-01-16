import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title = 'Welcome';
  text = 'I learn Angular 💟';
  description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
}
