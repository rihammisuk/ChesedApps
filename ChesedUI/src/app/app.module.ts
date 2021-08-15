import { AuthGuardService } from './common/auth/auth.guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageHelper } from './common/message/messageHelper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './common/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [MessageHelper,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
