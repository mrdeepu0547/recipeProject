import { Recipe } from "./recipe-details/recipe.model";
export class RecipeService{
  private   recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpW3QiSWw9KfBEH_JnfEkepE3VQavLQOICwQ&usqp=CAU'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpW3QiSWw9KfBEH_JnfEkepE3VQavLQOICwQ&usqp=CAU')
  ];
  getRecipe(){
    return this.recipes.slice();
  }
}
