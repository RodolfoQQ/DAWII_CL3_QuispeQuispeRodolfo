import { Routes } from '@angular/router';
import { DasboardComponent } from './dasboard/dasboard.component';
import { Pregunta1Component } from './dasboard/pregunta1/pregunta1.component';
import { Pregunta2Component } from './dasboard/pregunta2/pregunta2.component';

export const routes: Routes = [
  {path:"dasboard",component:DasboardComponent,
    children:[
      {path:"pregunta1",component:Pregunta1Component},
      {path:"pregunta2",component:Pregunta2Component}
  ] },
  {path: "", redirectTo: "dasboard", pathMatch: "full"},
];
