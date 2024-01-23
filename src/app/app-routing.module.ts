import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './home/income/income.component';
import { DashboardComponent } from './home/components/dashboard/dashboard.component';
import { ExpenseComponent } from './home/expense/expense.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  { path: 'income', component: IncomeComponent },
  { path: 'expense', component: ExpenseComponent },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
