import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { MyNewBlogComponent } from './my-new-blog/my-new-blog.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:id', component: MyNewBlogComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
