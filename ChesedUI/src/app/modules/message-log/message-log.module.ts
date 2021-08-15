import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageLogComponent } from './message-log.component';
import { MessageLogRoutingModule } from './message-log-routing.module';


@NgModule({
  declarations: [
    MessageLogComponent
  ],
  imports: [
    CommonModule,
    MessageLogRoutingModule
  ]
})
export class MessageLogModule { }
