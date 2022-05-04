import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event } from '@angular/router';
import {
  NavigationStart,
  NavigationError,
  NavigationEnd,
} from '@angular/router';

import { AnimesService } from '../services/animes.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
})
export class GenreComponent implements OnInit {
  genre: string = '';
  animeSeries: any[] = [];
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private animeService: AnimesService
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        //do something on start activity
        this.ngOnInit();
      }
    });
  }
  ngOnInit(): void {
    // this.genre = this.activeRoute.snapshot.params['genre'];
    // this.animeSeries = this.animeService.getAnimesByGenre(
    //   this.genre.toLowerCase()
    // );
  }
}
