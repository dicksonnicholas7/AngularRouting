import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { PlayFormComponent } from './components/play-form/play-form.component';


const routes: Routes = [
  {path: '', redirectTo: 'all', pathMatch: 'full'},
  {path: 'add', component: PlayFormComponent},
  {path: 'all', component: IntroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
