export interface State {
  isFloatingHeartsShow: boolean;
}

export enum ActionKind {
  SHOW = 'SHOW',
  HIDE = 'HIDE',
}

export interface Actions {
  type: ActionKind;
}

export function floatingHeartsReducer(state: State, action: Actions) {
  switch (action.type) {
    case ActionKind.SHOW:
      return { ...state, isFloatingHeartsShow: true };
    case ActionKind.HIDE:
      return { ...state, isFloatingHeartsShow: false };
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
