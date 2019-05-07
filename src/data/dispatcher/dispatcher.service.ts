import { BehaviorSubject } from 'rxjs';
import { Action, ActionType } from './actions.api';

export class DispatcherService {
  private dispatcher$: BehaviorSubject<Action> = new BehaviorSubject<Action>({ type: ActionType.RELOAD_POSTS });

  getDispatcher(): BehaviorSubject<Action> {
    return this.dispatcher$;
  }

  dispatch(action: Action): void {
    this.dispatcher$.next(action);
  }
}
