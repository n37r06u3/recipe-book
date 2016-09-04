import { Component } from '@angular/core';
import {HeaderComponent} from './header'
import {RecipesComponent} from './recipes'
@Component({
  moduleId: module.id,
  selector: 'rb-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[HeaderComponent,RecipesComponent]
})
export class AppComponent {
  title = 'app works!';
}
