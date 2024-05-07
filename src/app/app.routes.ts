import { Routes } from '@angular/router';
import { EnquiryComponent } from '../pages/enquiry/enquiry.component';
import { StoreComponent } from './pages/store/store.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path:'',
        component:EnquiryComponent,
        title:'home',
    },
    {
        path:'store',
        component:StoreComponent
    },
    {
        path:'enquiry',
        component:EnquiryComponent
    },
    {
        path:'**',
        component:NotFoundComponent
    }
];
