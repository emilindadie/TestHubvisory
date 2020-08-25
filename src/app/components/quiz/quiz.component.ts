import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(private service: MovieService) { }

  ngOnInit() {
    this.service.loadPopularMovies().subscribe(res => console.log(res));
  }

}
