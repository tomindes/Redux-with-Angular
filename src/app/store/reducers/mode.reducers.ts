import { initialModeState, IModeState } from '../state/mode.state';
import { ModeActions } from '../actions/mode.actions';

interface IAction {
  type: string;
  payload: any;
}

export function modeReducer(state = initialModeState, action: IAction) : IModeState {
  switch (action.type) {
    case ModeActions.EDIT_MODE_ON:
      return Object.assign({}, state, {
        editMode: true
      });
      
    case ModeActions.EDIT_MODE_OFF:
      return Object.assign({}, state, {
        editMode: false
      });

    default:
      return state
  }
}