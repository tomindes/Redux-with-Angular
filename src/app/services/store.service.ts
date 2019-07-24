import { Injectable } from '@angular/core';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from '../store/reducers/app.reducers';

@Injectable()
export class StoreService {
  store: any;

  constructor() {
    this.store = createStore(appReducer, applyMiddleware(thunk));
  }
}


