import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExpenseComponent } from './expense/expense.component';
import { IncomeComponent } from './income/income.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ExpenseComponent,
    IncomeComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
