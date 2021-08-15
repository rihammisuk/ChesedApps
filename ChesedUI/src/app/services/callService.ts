import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpHelper} from '../common/http/httpHelper';
import { Call } from '../models/call';


@Injectable({
    providedIn: 'root'
})
export class CallService {
  constructor(private httpHelper: HttpHelper) {
      
  }

  create(call: Call): Observable<any> {
    const url = 'api/call/create';
    return this.httpHelper.postHelper(url, call);
  }

  acceptMemberReqByDispatcher(call: Call): Observable<any> {
    const url = 'api/call/acceptMemberReqByDispatcher';
    return this.httpHelper.postHelper(url, call);
  }

  setPriority(call: Call): Observable<any> {
    const url = 'api/call/setPriority';
    return this.httpHelper.postHelper(url, call);
  }

  callAcceptByDispatcher(call: Call): Observable<any> {
    const url = 'api/call/callAcceptByDispatcher';
    return this.httpHelper.postHelper(url, call);
  }

  cancelByDispatcher(call: Call): Observable<any> {
    const url = 'api/call/cancelByDispatcher';
    return this.httpHelper.postHelper(url, call);
  }

}