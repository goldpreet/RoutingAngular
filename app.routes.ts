import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';

export const routes: Routes = [
    {path: 'Login', component: LoginComponent},
    {path: 'Signup', component: SignupComponent},
];
