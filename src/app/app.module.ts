import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {JobExecutorComponent} from './jobExecutorMaps/job-executor/job-executor.component';
import {JobExecutorsComponent} from './jobExecutorMaps/job-executors/job-executors.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JobexecutorService} from './service/jobexecutor.service';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {JobExecLeafletComponent} from './jobExecutorMaps/job-exec-leaflet/job-exec-leaflet.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AgmMarkerComponent} from './jobExecutorMaps/agm-marker/agm-marker.component';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';


@NgModule({
  declarations: [
    AppComponent,
    JobExecutorComponent,
    JobExecutorsComponent,
    JobExecLeafletComponent,
    AgmMarkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [JobexecutorService,
    AngularFireDatabase],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
