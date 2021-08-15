import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeLayoutComponent} from './common/layout/homelayout';
import {LoginLayoutComponent} from './common/layout/loginlayout';
import {CustomDateFormatPipe} from './common/pipes/datefilter.pipe';
import {AlertComponent} from './common/alert/alert.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MessageHelper} from './common/message/messageHelper';
import {HttpHelper} from './common/http/httpHelper';
import {LoadingSpinnerComponent} from './common/spinner/loading-spinner.component';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandlerService } from './services/ErrorHandlerService';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    LoginLayoutComponent,
    LoadingSpinnerComponent,
    CustomDateFormatPipe,
    AlertComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    HomeLayoutComponent,
    LoginLayoutComponent,
    LoadingSpinnerComponent,
    CustomDateFormatPipe,
    AlertComponent,
  ],
  bootstrap: [],
  providers: [MessageHelper]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [HttpHelper, LoadingSpinnerComponent,{
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorHandlerService,
        multi: true
      }]
    };
  }
}
