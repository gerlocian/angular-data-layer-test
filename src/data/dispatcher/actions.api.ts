export enum ActionType {
  RELOAD_POSTS = 'RELOAD_POSTS',
}

export interface Action {
  type: ActionType;
  data?: any;
}
