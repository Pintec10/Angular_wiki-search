import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

interface WikiPage {
  title: string,
  snippet: string,
  pageid: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: WikiPage[] = [];

  constructor(
    private wikipedia: WikipediaService
  ) { }

  onTermSubmitted(term: string) {
    this.wikipedia.search(term).subscribe((data) => {
      this.pages = data;
    });
  }
}
