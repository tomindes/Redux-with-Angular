import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { StoreService } from '../../services/store.service';
import { editModeOn, editModeOff } from '../../store/actions/mode.actions';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  store: any;
  userId: string;
  user: object;

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService
    ) {
      this.user = {};
    }

  ngOnInit() {
    this.store = this.storeService.store.getState();
    this.userId = this.route.snapshot.paramMap.get("id");

    this.user = this.store.user.users.find((user)=>{if(user.id == this.userId) {return user}});
    if (!this.user) {location.href = "/"};
    
    this.storeService.store.subscribe(() => {
      this.store = this.storeService.store.getState();
    });
  }

  edit() {
    if (this.store.mode.editMode) {
      this.storeService.store.dispatch(editModeOff());
    } else {
      this.storeService.store.dispatch(editModeOn());
    }
  }

}
