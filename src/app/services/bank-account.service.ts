import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transaction {
  date: string;
  amount: number;
  balanceAfter: number;
  type: 'DEPOSIT' | 'WITHDRAWAL';
}

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  private apiUrl = 'http://localhost:8080/api/account';

  constructor(private http: HttpClient) {}

  deposit(amount: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/deposit?amount=${amount}`, {});
  }

  withdraw(amount: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/withdraw?amount=${amount}`, {});
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/transactions`);
  }

  getBalance(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/balance`);
  }
}
