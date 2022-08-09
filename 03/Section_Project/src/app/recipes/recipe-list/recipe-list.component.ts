import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('A Test Recipe 1', 'by Caravaggio', 
    'https://upload.wikimedia.org/wikipedia/commons/1/1e/Canestra_di_frutta_%28Caravaggio%29.jpg'), 
    new Recipe('A Test Recipe 2', 'by Antoine Vollon', 
    'https://upload.wikimedia.org/wikipedia/commons/b/b9/Antoine_Vollon_-_Mound_of_Butter_-_National_Gallery_of_Art.jpg'),
    new Recipe('A Test Recipe 3', 'by Louise Moillon', 
    'https://upload.wikimedia.org/wikipedia/commons/c/c9/Still-Life_with_Cherries_Strawberries_and_Gooseberries_1630_Moillon.jpg'),
    new Recipe('A Test Recipe 4', 'by Floris Claesz van Dijck', 
    'https://tiqets-cdn.s3.eu-west-1.amazonaws.com/wordpress/blog/wp-content/uploads/2020/05/still-life-with-cheese.jpg'),
    new Recipe('A Test Recipe 5', 'by Paul Cézanne', 
    'https://upload.wikimedia.org/wikipedia/commons/3/37/Paul_C%C3%A9zanne%2C_Still_Life_With_Apples%2C_c._1890.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
