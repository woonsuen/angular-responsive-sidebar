import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeSeriesComponent } from './pages/anime-series/anime-series.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: 'series/:name',
    component: AnimeSeriesComponent,
  },
  {
    path: 'series',
    redirectTo: '',
  },
  {
    path: 'genre/:genre',
    component: GenreComponent,
  },

  {
    path: 'genre',
    redirectTo: '',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
