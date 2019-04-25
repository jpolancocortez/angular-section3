import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipie.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipies: Recipe[] = [
    new Recipe('A test Recipe', 'This is a simple test',
    'https://images.101cookbooks.com/simple-sauteed-zucchini-recipe-h.jpg?w=680&auto=format')
  ];

  constructor() { }

  ngOnInit() {
  }

}
