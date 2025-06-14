import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllVideoGamesService {
  private readonly httpClient = inject(HttpClient);

  constructor() { }
}
