import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [CinemaService]
})
export class MyHomeComponent implements OnInit {
  movies : Array<Object>
  constructor(public cinemaService: CinemaService) { }

  ngOnInit() {
    this.movies = this.cinemaService.getMovies();
  }

}
