import { IUser } from '../../models/user.interface';


export interface IUserState {
  users: IUser[];
  filteredUsers: IUser[];
  userCount: number;
  userLoading: boolean;
  searchText: string;
}

export const initialUserState: IUserState = {
  users: [],
  filteredUsers: [],
  userCount: 0,
  userLoading: false,
  searchText: ""
};