import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'recipe-box',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe-Box';
  selectedRecipe = null;
  
  MasterRecipesList: Recipe[] = [
    new Recipe("Hot Dogs", "hot-dog, buns, condiments", "It's easy. Google it, stupid.", 3),
    new Recipe("Apple", "apple", "just bite into it. simple.", 2),
    new Recipe("Orange", "orange", "just peel it. simple.", 1)
  ]
  
  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }
}
