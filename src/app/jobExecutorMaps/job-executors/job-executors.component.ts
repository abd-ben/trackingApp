import {Component, OnInit} from '@angular/core';
import {JobexecutorService} from '../../service/jobexecutor.service';
import {FirebaseService} from '../../service/firebase.service';
import {JobExecutor} from '../../model/jobExecutor';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-job-executors',
  templateUrl: './job-executors.component.html',
  styleUrls: ['./job-executors.component.css']
})
export class JobExecutorsComponent implements OnInit {

  protected jobExecutors: any = [];
  jobArray = [];


  msg = 'Welcome To Casa';
  lat = 33.5818856;
  lng = -7.6477929;
  zoom = 13;


  constructor(private service: JobexecutorService,
              private firebaseService: FirebaseService,
              private realTimeDB: AngularFireDatabase) {
  }

  ngOnInit() {

    /*const ref = this.firebaseService.getAllFromRealDB();
    // tslint:disable-next-line:only-arrow-functions
    ref.on('value', function(snapshot) {
      this.jobExecutor = snapshot;
      console.log(snapshot.val());
    });*/
    this.fnc();
    /*const ref2 = this.firebaseService.getJobExec('LfLMmBo5MRBekAHr_zi');
    ref2.on('value', function(snapshot) {
      console.log(snapshot.val());
      this.jobExecutors = snapshot;
    });*/


    /*this.firebaseService.getAllFromRealDB().subscribe(value => {
      // this.jobExecutors = value;
      console.log(this.jobExecutors);
    }, error1 => {
    });*/
    /*this.service.getListJobExecutor().subscribe(
      value => {
        this.jobExecutors = value;
        console.log(this.jobExecutors);
        // tslint:disable-next-line:only-arrow-functions
        this.jobExecutors.forEach(function(job) {
          console.log(job.lng);
        });
      }, error1 => {
      }
    );*/
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

  /*fnc() {
    this.fireList = this.realTimeDB.list('job');
    this.fireList.snapshotChanges().subscribe(value => {
      value.forEach(value1 => {
        const data = value1.payload.toJSON();
        data['$key'] = value1.key;
        this.jobExecutors.push(data as JobExecutor);
      });
    });
    console.log('-------------');
    console.log(this.jobExecutors);
    console.log('-------------');
  }*/


}
