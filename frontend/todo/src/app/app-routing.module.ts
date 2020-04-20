import { WelcomeComponent } from './welcome/welcome.component';
import { TodoComponent } from './todo/todo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

// welcome
const routes: Routes = [
  { path: '' , component:LoginComponent}, // canActive,RouteGaurdService
  { path: 'Login', component: LoginComponent},
  { path: 'welcome/:name', component: WelcomeComponent ,canActivate :[ RouteGuardService]},
  { path: 'todos', component: ListTodosComponent ,canActivate :[ RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate :[ RouteGuardService] },
  { path: 'todos/:id', component: TodoComponent, canActivate:[RouteGuardService] },

  { path: '**', component: ErrorComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


