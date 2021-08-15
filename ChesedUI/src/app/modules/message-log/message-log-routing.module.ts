import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageLogComponent } from './message-log.component';

const routes: Routes = [{ path: '', component: MessageLogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageLogRoutingModule { }
