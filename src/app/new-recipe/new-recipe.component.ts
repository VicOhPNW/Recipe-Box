import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  @Output() sendTask = new EventEmitter();
  
  submitForm(name: string, ingredients: string, directions: string, deliciousness: string) {
    let newRecipe = new Recipe(name, ingredients, directions, parseInt(deliciousness));
    this.sendTask.emit(newRecipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
