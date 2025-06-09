import { Component } from '@angular/core';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
})
export class MovieSearchComponent {
  searchQuery: string = '';
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  searchMovies() {
    if (this.searchQuery.trim() !== '') {
      this.movieService.searchMovies(this.searchQuery).subscribe(
        (data) => {
          this.movies = data.Search || [];
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
