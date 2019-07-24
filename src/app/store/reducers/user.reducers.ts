import { initialUserState, IUserState } from '../state/user.state';
import { UserActions } from '../actions/user.actions';

interface IAction {
  type: string;
  payload: any;
}

export function userReducer(state = initialUserState, action: IAction) : IUserState {
  switch (action.type) {
    case UserActions.GET_USERS_START:
      return Object.assign({}, state, {
        userLoading: true
      });

    case UserActions.GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        users: action.payload,
        userLoading: false
      });

    case UserActions.UPDATE_FILTERED_USERS:
      return Object.assign({}, state, {
        filteredUsers: action.payload,
      });

    case UserActions.UPDATE_USER_COUNT:
      return Object.assign({}, state, {
        userCount: action.payload
      });
      
    case UserActions.UPDATE_SEARCH:
        let users = state.users.filter((user)=>{
          return user.lastName.includes(action.payload);
        });

        return Object.assign({}, state, {
          searchText: action.payload,
          filteredUsers: users,
          userCount: users.length
        });

    default:
      return state
  }
}