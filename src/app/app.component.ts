import { Component } from '@angular/core';
import {Fruit} from "./fruit";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproject2';
  fruits: Fruit[] =
    [
      {name: 'watermelon', color: 'pink', score: 10},
      {name: 'grape', color: 'green', score: 7},
      {name: 'cantaloupe', color: 'orange', score: 0},
      {name: 'apple', color: 'red', score: 6},
      {name: 'pomelo', color: 'yellow', score: 2},
      {name: 'orange', color: 'orange', score: 9},
      {name: 'plum', color: 'purple', score: 5}
    ];
  getClassForFruit(fruit: Fruit){
    return {like: fruit.score > 7, dislike: fruit.score< 5}
  }
}
