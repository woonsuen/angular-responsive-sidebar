import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-anime-video',
  templateUrl: './anime-video.component.html',
  styleUrls: ['./anime-video.component.scss'],
})
export class AnimeVideoComponent implements OnInit {
  @Input()
  animeName!: string;
  @Input()
  urls!: string[];

  safeUrls: SafeResourceUrl[] = [];

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    console.log(this.urls);
    for (let url of this.urls) {
      // this._sanitizer.bypassSecurityTrustResourceUrl(url);

      this.safeUrls.push(this._sanitizer.bypassSecurityTrustResourceUrl(url));
    }
  }
}
