import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { AuthorComponent } from './author/author.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: ``,
    component: HomeComponent
  },
  {
    path: `contact`,
    component: ContactComponent
  },
  {
    path: `menu`,
    component: MenuComponent
  },
  {
    path: `author`,
    component: AuthorComponent
  },
  {
    path: `not-found`,
    component: PageNotFoundComponent
  },
  {
    path: `**`,
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
