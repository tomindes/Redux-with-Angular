import { IUserState, initialUserState } from './user.state';
import { IModeState, initialModeState } from './mode.state';


export interface IAppState {
    user: IUserState;
    mode: IModeState;
}

export const initialAppState: IAppState = {
    user: initialUserState,
    mode: initialModeState
};

export function getInitialState(): IAppState {
  return initialAppState;
}