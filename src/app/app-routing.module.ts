import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReposComponent } from './repos/repos.component';
import { PostComponent } from './post/post.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'post',component:PostComponent},
  {path:'repo',component:ReposComponent},

  { path: '',   redirectTo: '/post', pathMatch: 'full'},
  
  
  {path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
