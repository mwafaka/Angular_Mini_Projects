import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = '4a3b711b'; // Replace with your actual API key
  private apiUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  searchMovies(query: string): Observable<any> {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&s=${query}`;
    return this.http.get(url);
  }
}
