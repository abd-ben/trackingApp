import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {JobExecutorComponent} from './jobExecutorMaps/job-executor/job-executor.component';
import {JobExecutorsComponent} from './jobExecutorMaps/job-executors/job-executors.component';
import {JobExecLeafletComponent} from './jobExecutorMaps/job-exec-leaflet/job-exec-leaflet.component';
import {AgmMarkerComponent} from './jobExecutorMaps/agm-marker/agm-marker.component';

const routes: Routes = [
  {path: '', redirectTo: 'jobexecutor', pathMatch: 'full'},
  {path: 'jobexecutor', component: JobExecutorComponent},
  {path: 'agmMarker', component: AgmMarkerComponent},
  {path: 'jobexecutors', component: JobExecutorsComponent},
  {path: 'jobexecutorsLFT', component: JobExecLeafletComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
