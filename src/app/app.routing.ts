import { RouterModule, Routes } from '@angular/router';
import { NapComponent } from './nap/nap.component';
import { SleepComponent } from './sleep/sleep.component';
import { FeedComponent } from './feed/feed.component';
import { MenuComponent } from './menu/menu.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'nap',
        component: NapComponent
    },
    {
        path: 'sleep',
        component: SleepComponent
    },
    {
        path: 'feed',
        component: FeedComponent
    }
]

export const appRouteModule = RouterModule.forRoot(appRoutes);