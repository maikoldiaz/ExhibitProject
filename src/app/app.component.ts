import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExhibitProject';
  nombre = 'maikol';
  completeName = 'maikol stid diaz hoya';
  imageURL = 'http://lorempixel.com/400/200/';

  people = {
    name : 'luis',
    age : 20
  };

  getName() {
    return this.completeName; 
  }

  save(e){
    alert(e.type);
  }
}
