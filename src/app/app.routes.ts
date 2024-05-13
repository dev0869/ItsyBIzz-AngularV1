import { Routes } from '@angular/router';
import { StoreComponent } from './pages/store/store.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogsDetailsComponent } from './pages/blogs-details/blogs-details.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
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
        path:'product/:name',
        component:ProductpageComponent
    },
    {
        path:'blogs',
        component:BlogsComponent
    },
    {
        path:'blogs/:name',
        component:BlogsDetailsComponent
    },
    {
        path:'**',
        component:NotFoundComponent
    }
];
