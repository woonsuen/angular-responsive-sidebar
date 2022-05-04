import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from '../../anime';

@Component({
  selector: 'app-anime-catalog',
  templateUrl: './anime-catalog.component.html',
  styleUrls: ['./anime-catalog.component.scss'],
})
export class AnimeCatalogComponent implements OnInit {
  @Input()
  catalogName!: string;

  @Input() animes!: Anime[];

  animesPerPage = 20;
  animesToDisplay: Anime[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.onPageChange(1);
  }

  onPageChange(page: number): void {
    this.animesToDisplay = [];
    for (
      let i = (page - 1) * this.animesPerPage;
      i <
      (this.animes.length - page * this.animesPerPage > 0
        ? page * this.animesPerPage
        : this.animes.length);
      i++
    )
      this.animesToDisplay.push(this.animes[i]);
  }

  onClick(anime: Anime): void {
    console.log(anime);

    this.router.navigateByUrl(`/series/${anime.animeName}`);
  }
}
