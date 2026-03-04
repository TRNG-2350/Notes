import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Admin } from './admin/admin';
import { adminGuardGuard } from './admin-guard-guard';

export const routes: Routes = [
    {path: '', component: Home, title: 'Home'},
    {path: 'about', component: About, title: 'About'},
    {path: 'contact', component: Contact, title: 'Contact'},
    {path: 'help', redirectTo: 'contact'},
    {path: 'admin', component: Admin, canActivate: [adminGuardGuard], title: 'Admin'},
    {path: '**', redirectTo: ''},
];
