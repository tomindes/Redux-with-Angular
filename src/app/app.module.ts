import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserCountComponent } from './components/user-count/user-count.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UsersComponent } from './components/users/users.component';

import { UsersService } from './services/users.service';
import { StoreService } from './services/store.service';


const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'user-info/:id', component: UserInfoComponent },
  { path: '',   redirectTo: '/users', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserSearchComponent,
    UserCountComponent,
    UserInfoComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }