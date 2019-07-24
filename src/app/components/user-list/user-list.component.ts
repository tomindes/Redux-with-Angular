import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { StoreService } from '../../services/store.service';
import { getUsers } from '../../store/actions/user.actions';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  store: any;

  constructor(
    private usersService: UsersService,
    private storeService: StoreService
  ) {  }

  ngOnInit() {
    this.store = this.storeService.store.getState();

    this.storeService.store.subscribe(() => {
      this.store = this.storeService.store.getState();
    });
    
    this.storeService.store.dispatch(getUsers());
  }
}
