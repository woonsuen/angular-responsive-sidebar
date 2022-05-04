import { Injectable } from '@angular/core';
import { Anime } from '../anime';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  trendingAnimes: Anime[] = [
    {
      animeName: 'Eroriman',
      episodes: [
        {
          episodeName: 'Episode 1',
          urls: ['https://nhplayer.com/v/KzlmGmjG2Ya6phg/'],
        },
      ],
    },
    {
      animeName: 'Tamashii Insert',
      episodes: [
        {
          episodeName: 'Episode 1',
          urls: [
            'https://hanime.xxx/wp-content/plugins/player-logic/player.php?data=NENtNVUzOW9kMTJrd3R0NEYzK0plQ3QySkppWW1YZ3V0SHI4dENEMnd5eTNMZlM2TUliNGh4aWhhSHp4bWt0bFBHYmxjNGEydHZ2M3ZKQXc1VTJrK1Z0SUJxSVQ1c1NWbXNCK3FzUERaMHZVbHU1QlJyMkI1dU1KcGVlcEtWOFJkZ2JRNFEwblFUcTlwVkNPRE9hQkVNcFBkamY5VGQwOFlrM0t5alBHcnBDUEhuUHN0L1dXcW45RE1ISndrV3lOWGo5OExBcDh6L1dVNHZhREZJdFhpTGdFZS9xQXJjSWJjcGJ5TkdXUWFrS2JSUDlOR1dLOWYzMHQrYVJuajlDU0pLaW9QVVRFa2tIdTdrcVA4bTN0aGtEanlLMk5QdFZUa1N1b1lqa1hIWDA9Onw6Onw6YzNsME9pYkpneEp4UHdqTVh3QVBlQT09',
          ],
        },
        {
          episodeName: 'Episode 2',
          urls: [
            'https://hanime.xxx/wp-content/plugins/player-logic/player.php?data=czl5K3h2VkxwUVNoc2FqME03WGRqUVVDUmNBS1ZwbXVzQWsxNmpBaXVPaFBSNTdBYjJxdWdxdGFBL0RFa0lNcy84Q3diS0NsZ2g0a3lFL2h1SnRyTS9yNndrbVRBQ05MR0dFeUliek0zakJxVGpvcUczaklqOHY1bWJDSCsvNU8zREdBaVdDbmVEY1pBbTlSazN2YktwWWk1QVFpVFBqR1J5UnRtVmR1MkQ2TnJnRmxJeEJRL0M0QjhsWmFHYjQrb1FOTDIzMGVnREFTK01mRXFzamsxMWxhV2VyYjYzcEZaWjlmNXMzOHRUST06fDo6fDozdVE1ZmtweGIwUklueEkrYkdoeS93PT0=',
          ],
        },
      ],
    },
  ];

  constructor() {}

  getAnimes(): Anime[] {
    return this.trendingAnimes;
  }

  getAnimeByName(animeName: string): Anime | undefined {
    return this.trendingAnimes.find((anime) => {
      return anime.animeName == animeName;
    });
  }
}
