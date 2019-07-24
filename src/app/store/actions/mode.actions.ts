export const ModeActions = {
  EDIT_MODE_ON: '[User] on edit mode',
  EDIT_MODE_OFF: '[User] off edit mode'
}

export function editModeOn() {
  return { type: ModeActions.EDIT_MODE_ON }
}

export function editModeOff() {
  return { type: ModeActions.EDIT_MODE_OFF }
}