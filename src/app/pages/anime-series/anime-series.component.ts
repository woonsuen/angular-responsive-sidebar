import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from '../../anime';
import { AnimesService } from '../../services/animes.service';

@Component({
  selector: 'app-anime-series',
  templateUrl: './anime-series.component.html',
  styleUrls: ['./anime-series.component.scss'],
})
export class AnimeSeriesComponent implements OnInit {
  animeName: string = '';

  animeSeries: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private animeService: AnimesService
  ) {}

  ngOnInit(): void {
    this.animeName = this.activeRoute.snapshot.params['name'];
    this.animeSeries = this.animeService.getAnimeByName(
      this.activeRoute.snapshot.params['name']
    );

    console.log(this.animeSeries);
  }
}
