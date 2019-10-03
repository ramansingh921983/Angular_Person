import { ListUsersComponent } from './list-users/list-users.component';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'users', component: ListUsersComponent },
 { path: 'search', component: SearchComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
