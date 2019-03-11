import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour des héros';
  heroes=[
    'superman',
    'batman',
    'wonderwoman',
    'thor',
  ];
  name = "";
  heroToAdd = '';

  addHero() {
    // Si heroToAdd === ' coucou ';
    // alors heroToAdd.trim() = 'coucou'
    // donc si HeroToAdd = '
    // alors heroToAdd.trim() = ''
    if (this.heroToAdd.length > 0) {
      this.heroes.push(this.heroToAdd.trim());
      this.heroToAdd = '';
    } else {
      alert('Le nom du héros ne doit pas étre vide')
    }


  }
}
