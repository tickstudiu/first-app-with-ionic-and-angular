import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Sour with mixed vegetables',
      imageUrl: 'https://steemitimages.com/640x0/https://steemitimages.com/DQmZJzvLK3xA8kKmnFRPX99JiCp9PVMCjv2u7TBEN5M1YgU/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B8%A7%E0%B8%A1.png',
      ingredient: ['ingrediend 1', 'ingrediend 2']
    },
    {
      id: 'r2',
      title: 'Stir fried Chicken with cashew nuts  ',
      imageUrl: 'https://steemitimages.com/DQmaQUqWMLLCc3SY6aMdZrFbCkn47mGK3cd43L9kt37qwFm/%E0%B9%84%E0%B8%81%E0%B9%88%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%A1%E0%B9%87%E0%B8%94%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87.png',
      ingredient: ['ingrediend 1', 'ingrediend 2']
    }
  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes]
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    }
  }
}
