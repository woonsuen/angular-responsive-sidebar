import { Component, OnInit } from '@angular/core';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingAnimes: any[] = [];

  constructor(private animeService: AnimesService) {}

  ngOnInit(): void {
    this.trendingAnimes = this.animeService.getAnimes();
  }
}
