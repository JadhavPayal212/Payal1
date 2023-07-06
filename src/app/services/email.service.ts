import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmailHttpService } from './email-http.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  private mailPayloadStore= new BehaviorSubject<any>(null);
  mailPayloadStore$=this.mailPayloadStore.asObservable();
  constructor(private emailHttpService:EmailHttpService) { }

  makeCall():void{
    this.emailHttpService.makeCall();
  }

  setMailPayload(payload:any):void{
this.mailPayloadStore.next(payload)
  }
}
