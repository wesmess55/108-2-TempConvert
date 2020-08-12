import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempCalculatorComponent } from './components/temp-calculator/temp-calculator.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
{path:'/temperature',component:TempCalculatorComponent},
{path: 'todo', component: TodoListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
