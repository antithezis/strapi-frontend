import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FiltersComponent } from './dashboard/components/filters/filters.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'filters', component: FiltersComponent }
];
