import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'recipe-box',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe-Box';

  recipes: Recipe[] = [
    new Recipe("Hot Dogs", "hot-dog, buns, condiments", "It's easy. Google it, stupid.", 3),
    new Recipe("Apple", "apple", "just bite into it. simple.", 2),
    new Recipe("Orange", "orange", "just peel it. simple.", 1)
  ]

  selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  deliciousnessColor(recipe){
    if(recipe.deliciousness === 3){
      return "bg-danger";
    } else if (recipe.deliciousness === 2){
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
