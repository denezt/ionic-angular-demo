import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadedRecipe: any;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private recipesService: RecipesService, 
    private router: Router, 
    private alertCtrl: AlertController) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')){
        // Redirect User to leave page
        this.router.navigate(['/recipes']);
        return; 
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);      
    });
  }

  ionViewWillEnter(){
    console.log('ionViewDidEnter');
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
   console.log('ngOnDestroy');
  }

  onDeleteRecipe(){
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel'
      },{
        text: 'Delete'
      }
    ]
    }).then(alertEl => {
      alertEl.present();      
    });
    this.recipesService.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipes']);
  }



}
