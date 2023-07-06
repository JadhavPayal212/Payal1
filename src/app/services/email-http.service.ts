import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailHttpService {
   private static base_url=environment.api;
  constructor(private httpClient:HttpClient) { }

  makeCall(){
    this.httpClient.get(EmailHttpService.base_url)
  }
}
