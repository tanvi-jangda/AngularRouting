import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { BooksComponent } from './books/books.component';
import { WrongrouteComponent } from './wrongroute/wrongroute.component';

const routes: Routes = [
  {path:'technologies',component:TechnologyComponent},
  {path:'books', component:BooksComponent},
  {path:'',component:TechnologyComponent},
  {path:'**',component:WrongrouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }