import { IUser } from '../../models/user.interface';

export const UserActions = {
  GET_USERS_START: '[User] get users',
  GET_USERS_SUCCESS: '[User] get users success',
  UPDATE_FILTERED_USERS: '[User] update filtered users',
  UPDATE_USER_COUNT: '[User] update users count',
  UPDATE_SEARCH: '[User] update search'
}


export function getUsers() {
  return async function(dispatch: any) {
    dispatch(getUsersStart());
    let api: any = window;
    let users = await api.http.getUsers();
    
    dispatch(getUsersSuccess(users));
    dispatch(updateFilteredUsers(users));
    dispatch(updateUserCount(users.length));
  }
}

export function getUsersStart() {
  return { type: UserActions.GET_USERS_START }
}

export function getUsersSuccess(users: IUser[]) {
  return { type: UserActions.GET_USERS_SUCCESS, payload: users }
}

export function updateFilteredUsers(users: IUser[]) {
  return { type: UserActions.UPDATE_FILTERED_USERS, payload: users }
}

export function updateUserCount(userCount: number) {
  return { type: UserActions.UPDATE_USER_COUNT, payload: userCount }
}

export function updateSearch(text: string) {
  return { type: UserActions.UPDATE_SEARCH, payload: text }
}