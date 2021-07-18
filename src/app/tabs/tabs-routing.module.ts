import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
    {
      path: 'Home',
      loadChildren: () => import('../features/home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'Profile',
      loadChildren: () => import('../features/profile/profile.module').then( m => m.ProfilePageModule)
    },
    {
      path: 'Settings',
      loadChildren: () => import('../features/settings/settings.module').then( m => m.SettingsPageModule)
    },
      {
        path: '',
        redirectTo: '/tabs/Home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
