import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private apiUrl = environment.apiEndPoint

  constructor(private http: HttpClient) { }

  // Adding Expense
  addExpenditure(data: any){
       return this.http.post(`${this.apiUrl}/expense`, data);

  }

  // Fetching Expense
  fetchExpenditure(){
       return this.http.get(`${this.apiUrl}/expense`);
  }

  // Deleting Expense
  deleteExpenditure(id: string){
   return this.http.delete(`${this.apiUrl}/expense/${id}`);

  }
}
