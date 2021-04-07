import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselModule} from 'primeng/carousel';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CoreModule} from '../core/core.module';
import {ProjectComponent} from './project/project.component';
import {TeamComponent} from './team/team.component';

@NgModule({
  declarations: [HomeComponent, ProjectComponent, TeamComponent],
  imports: [RouterModule, CommonModule, CoreModule, CarouselModule],
})
export class PagesModule {}
