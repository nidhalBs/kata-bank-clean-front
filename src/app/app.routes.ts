import { Routes } from '@angular/router';
import { FormMovementComponent } from './components/form-movement/form-movement.component';
import { MovementListComponent } from './components/list-mouvement/list-mouvement.component';

export const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: 'form', component: FormMovementComponent },
  { path: 'list', component: MovementListComponent }
];
