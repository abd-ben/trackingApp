import {Component, OnInit} from '@angular/core';
import {JobexecutorService} from '../../service/jobexecutor.service';
import {FirebaseService} from '../../service/firebase.service';
import {GoogleMap} from '@agm/core/services/google-maps-types';
import {JobExecutor} from '../../model/jobExecutor';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Component({
  selector: 'app-agm-marker',
  templateUrl: './agm-marker.component.html',
  styleUrls: ['./agm-marker.component.css']
})
export class AgmMarkerComponent implements OnInit {

  protected jobExecutors: any = [];

  msg = 'Welcome To Casa';
  lat = 33.5818856;
  lng = -7.6477929;
  zoom = 13;
  map: GoogleMap;
  draggable = true;
  fireList: AngularFireList<any>;
  descrip: string;

  constructor(private service: JobexecutorService,
              private firebaseService: FirebaseService,
              private realTimeDB: AngularFireDatabase) {
  }

  ngOnInit() {
    this.fireList = this.realTimeDB.list('job');
  }

  markerDragEnd($event: MouseEvent) {

    const jExec = new JobExecutor();
    let x: any;
    x = $event;
    jExec.lat = x.coords.lat;
    jExec.lng = x.coords.lng;
    jExec.description = this.descrip;

    this.fireList.push(jExec);

    /*this.firebaseService.update('Iq285cV0OSpVUhuUoBGY', jExec).then(value => {
      // this.router.navigate(['jobexecutorsLFT']);
    });*/
    console.log(jExec);
  }


}
