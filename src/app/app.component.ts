import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    new Post('France-Australie : 2-1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus mi sit amet diam pharetra, tincidunt euismod tellus rhoncus. Sed viverra tempor porta. Phasellus condimentum interdum tristique.', 1),
    new Post('France-Pérou : 1-0', 'Etiam id purus leo. Donec id metus a erat vestibulum convallis lobortis nec lectus. Proin imperdiet consequat vulputate. In sodales felis quis fringilla efficitur. Nunc eget tristique arcu. Praesent pretium fringilla neque et eleifend.', -2),
    new Post('Danemark-France : 0-9', 'Ut sodales nulla sapien, at semper dolor efficitur eu. Praesent convallis pretium mauris, hendrerit vestibulum mauris volutpat sed. Nunc a elementum enim, ac ultrices justo. Fusce quis justo sapien. Praesent turpis nibh, accumsan eu arcu ut, viverra egestas arcu. Cras sed massa malesuada, ornare leo a, ultricies ex.', 0)
  ];
}

// Type post
class Post {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor(title, content, loveIts) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.created_at = new Date();
  }

}
