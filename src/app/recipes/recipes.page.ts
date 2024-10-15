import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[] | undefined;

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    console.log('ngOnInit');
    // Initial Load of Recipes
    console.log(this.recipes);
  }

  ionViewWillEnter(){
    console.log('ionViewDidEnter');
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionWillLeave(){
    console.log('ionWillEnter');
  }

  ionViewDidLeave(){
    console.log('ionViewWillEnter');
  }
  
  ngOnDestroy(): void {
   console.log('ngOnDestroy')
  }


}
