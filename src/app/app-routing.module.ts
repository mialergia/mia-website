import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ProjectComponent} from './pages/project/project.component';
import {TeamComponent} from './pages/team/team.component';
import {MENU} from './types/constants';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: MENU.project, component: ProjectComponent},
  {path: MENU.team, component: TeamComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // or 'top'
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
