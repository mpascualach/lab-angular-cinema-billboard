import { Injectable } from '@angular/core';

@Injectable()
export class CinemaService {
  id: Number;
  title: String;
  poster: String;
  synopsis: String;
  Genres: Array<String>;
  year: Number;
  director: String;
  actors: Array<String>;
  hours: Array<String>;
  room: Number;

  constructor() { }

  Movies: Array<Object> = [{
    id: 1,
    title: "All The President's Men",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81HMBVgv3iL._SY445_.jpg",
    synopsis: "'The Washington Post' reporters Bob Woodward and Carl Bernstein uncover the details of the Watergate scandal that leads to President Richard Nixon's resignation.",
    Genres: ["Biography", "Drama", "History", "Thriller" ],
    year: 1976,
    director: "Alan J. Pakula",
    actors: [ "Dustin Hoffman", "Robert Redford", "Jack Warden "],
    hours: ["17:30, 20:30, 23:30"],
    room: 1
  },
  {
    id: 2,
    title: "Love Exposure",
    poster: "http://3.bp.blogspot.com/_fsNjbSNWcZY/TExqFOuUPnI/AAAAAAAAAQQ/TAkZ3nYSGaY/s1600/Gwoemul+(2006).jpg",
    synopsis: "A monster emerges from Seoul's Han River and focuses its attention on attacking people. One victim's loving family does what it can to rescue her from its clutches.",
    Genres: [ "Action", "Comedy", "Drama", "Romance" ],
    year: 2006,
    director: "Joon-ho Bong",
    actors: ["Action" , "Comedy" , "Drama" , "Horror" , "Sci-Fi"],
    hours: ["15:30, 21:30, 01:30"],
    room: 2
  },
  {
    id: 3,
    title: "Birdman",
    poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
    synopsis: "A washed-up actor, who once played a famous superhero, attempts to revive his career by writing and starring in a Broadway play.",
    Genres: [ "Comedy", "Drama"],
    year: 2014,
    director: "Alejandro González Iñárritu",
    actors: [ "Michael Keaton", "Zach Galifianakis", "Edward Norton"],
    hours: ["18:30, 21:30, 00:30"],
    room: 3
  },
  {
    id: 4,
    title: "Le Samouraï",
    poster: "https://i.pinimg.com/originals/3f/f3/70/3ff370ef23601c3b4d50aaae1e438b2c.jpg",
    synopsis: "After Professional hitman Jef Costello is seen by witnesses his efforts to provide himself an alibi drive him further into a corner.",
    Genres: [ "Crime", "Drama", "Mystery ", "Thriller"],
    year: 1967,
    director: "Jean-Pierre Melville",
    actors: [ "Alain Delon", "Nathalie Delon", "François Périer"],
    hours: ["20:30, 23:30"],
    room: 4
  },
  {
    id: 5,
    title: "No",
    poster: "http://cdn.collider.com/wp-content/uploads/no-gael-garcia-bernal1.jpg",
    synopsis: "An ad executive comes up with a campaign to defeat Augusto Pinochet in Chile's 1988 referendum.",
    Genres: ["Drama"],
    year: 1967,
    director: " Pablo Larraín",
    actors: [ "Gael García Bernal", "Alfredo Castro", "Antonia Zegers"],
    hours: ["20:30, 23:30"],
    room: 5
  }];

  getMovies(){
    return this.Movies;
  }

  getMovie(filmId){
    let selected = this.Movies.filter(film => film['id']=== filmId)
  }
}
