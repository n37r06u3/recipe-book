import { Component } from '@angular/core';
import {HeaderComponent} from './header'
import {RecipesComponent} from './recipes'
import {ShoppingListComponent} from "./shopping-list";
@Component({
  moduleId: module.id,
  selector: 'rb-root',
  templateUrl: 'app.component.html',
  directives:[HeaderComponent,RecipesComponent,ShoppingListComponent]
})
export class AppComponent {
  title = 'app works!';
}
