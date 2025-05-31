import { Component, input } from '@angular/core';
import { VideoGame } from '../list-games/models/video-game';

@Component({
  selector: 'dtbc-table-games',
  standalone: true,
  imports: [],
  templateUrl: './table-games.component.html',
  styleUrl: './table-games.component.css'
})
export class TableGamesComponent {
  items = input.required<VideoGame[]>();
  title = input<string>('');
}
