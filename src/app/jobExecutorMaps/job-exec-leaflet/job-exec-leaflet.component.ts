import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {JobexecutorService} from '../../service/jobexecutor.service';
import {FirebaseService} from '../../service/firebase.service';
import {JobExecutor} from '../../model/jobExecutor';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-job-exec-leaflet',
  templateUrl: './job-exec-leaflet.component.html',
  styleUrls: ['./job-exec-leaflet.component.css']
})
export class JobExecLeafletComponent implements OnInit {

  protected jobExecutors: any = [];
  protected jobExecutor: JobExecutor;
  private jobEcexs: Observable<any[]> = null;
  jobArray = [];

  msg = 'Welcome To Casa';
  lat = 33.5818856;
  lng = -7.6477929;
  zoom = 13;
  fireList: AngularFireList<any>;

  constructor(private service: JobexecutorService,
              private firebaseService: FirebaseService,
              private realTimeDB: AngularFireDatabase) {
  }

  ngOnInit() {
    const myfrugalmap = L.map('frugalmap').setView([33.5818856, -7.6477929], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);

    /*this.service.getListJobExecutor().subscribe((data: any) => {
      data.forEach(podotactile => {
        const marker = L.marker([podotactile.lat, podotactile.lng]).bindPopup(podotactile.description).addTo(myfrugalmap);
      });
      console.log(data);
    });
*/
    this.realTimeDB.list('job').snapshotChanges().subscribe(value => {
      value.forEach(value1 => {
        const data = value1.payload.toJSON() as JobExecutor;
        const marker = L.marker([Number(data.lat), Number(data.lng)]).bindPopup(data.description).addTo(myfrugalmap);
        this.jobArray.push(data as JobExecutor);
      });
    });

  }

  fnc() {
    this.realTimeDB.list('job').snapshotChanges().subscribe(value => {
      value.forEach(value1 => {
        const data = value1.payload.toJSON();
        this.jobArray.push(data as JobExecutor);
      });
    });
    this.jobExecutors = [];
    this.jobExecutors = this.jobArray;
  }
}
