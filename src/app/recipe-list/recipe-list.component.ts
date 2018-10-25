import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();
  
  editButtonClicked(recipeToEdit: Recipe) {
    this.clickSender.emit(recipeToEdit);
  }

  constructor() { }

  ngOnInit() {
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
