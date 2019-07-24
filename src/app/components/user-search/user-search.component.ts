import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../services/store.service';
import { updateSearch } from '../../store/actions/user.actions';

@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  store: any;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit() {
    this.store = this.storeService.store.getState();
  }

  keypress(){
    this.storeService.store.dispatch(updateSearch(this.store.user.searchText));
  }
}
