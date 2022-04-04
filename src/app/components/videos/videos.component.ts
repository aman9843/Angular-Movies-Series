import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  @Input() site: string ="YouTube"
  @Input() key: string | null = null;
  videoUrl: SafeResourceUrl = '';

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.videoUrl = this.getSafeUrl('https://www.youtube.com/embed/'+this.key
  )}
  getSafeUrl(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
