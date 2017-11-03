import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { TeamRosterComponent } from './team-roster/team-roster.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
   {
     path: 'about',
     component: AboutComponent
   },
   {
     path: 'team-roster',
     component: TeamRosterComponent
   },
   {
     path: 'player/:id',
     component: PlayerDetailComponent
   },
   {
     path: 'admin',
     component: AdminComponent
   }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
