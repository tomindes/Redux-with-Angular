import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'user-count',
  templateUrl: './user-count.component.html',
  styleUrls: ['./user-count.component.css']
})
export class UserCountComponent implements OnInit {
  store: any;
  
  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit() {
    this.store = this.storeService.store.getState();

    this.storeService.store.subscribe(() => {
      this.store = this.storeService.store.getState();
    });
  }

}
