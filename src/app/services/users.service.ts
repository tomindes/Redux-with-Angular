import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const RANDOM_USER_TOP100 = 'https://randomuser.me/api/?nat=gb&results=100&seed=a245abd323ae3a1b';

@Injectable()
export class UsersService {
  users: Array<any> = [];
  api: any;

  constructor(
    private http: HttpClient
  ) {
    this.api = window;
    this.api.http = this;
  }

  async getUsers() {
    if (this.users.length == 0) {
      const response: any = await this.http.get(RANDOM_USER_TOP100, {headers: {dataType: 'json'}}).toPromise();
      
      this.users = response.results.map((user, index)=>{
        return {
          id: index,
          firstName: user.name.first,
          lastName: user.name.last,
          picture: user.picture.large,
          email: user.email
        }
      });
      
      return this.users;
    } else {
      return new Promise((resolve, reject) => {
        resolve(this.users);
      });
    }
  }
}
