import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatcherService } from './dispatcher.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    DispatcherService,
  ],
})
export class DispatcherModule {}

export { Action, ActionType } from './actions.api';
export { DispatcherService } from './dispatcher.service';
