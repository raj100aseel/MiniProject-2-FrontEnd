import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseURL = "http://localhost:8080/api/accounts";

  constructor(private httpClient : HttpClient){}

  getAccountList() : Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.baseURL}`);
  }

  openAccount(account : Account) : Observable<Account> {
    return this.httpClient.post<Account>(`${this.baseURL}`,account);
  }
}
