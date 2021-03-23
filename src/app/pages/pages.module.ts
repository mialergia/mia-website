import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {CoreModule} from '../core/core.module';
import {ProjectComponent} from './project/project.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HomeComponent, ProjectComponent],
  imports: [RouterModule, CommonModule, CoreModule],
})
export class PagesModule {}
