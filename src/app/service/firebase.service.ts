import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {JobExecutor} from '../model/jobExecutor';
import {AngularFirestore} from '@angular/fire/firestore';
import {FirebaseListObservable} from '@angular/fire/database-deprecated';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private basePath = '';
  protected jobExecutor: AngularFireObject<any> = null;
  private jobs: FirebaseListObservable<JobExecutor[]> = null;


  constructor(private db: AngularFirestore,
              private realTimeDB: AngularFireDatabase) {
  }

  getAllFromRealDB() {
    return this.realTimeDB.database.ref();
  }

  get(Key) {
    return this.db.collection('/job_executor' + Key).snapshotChanges();
  }

  update(Key, value) {
    return this.db.collection('job_executor').doc(Key).set(Object.assign({}, value));
  }

  delete(Key) {
    return this.db.collection('job_executor').doc(Key).delete();
  }

  getAll() {
    return this.db.collection('/job_executor').snapshotChanges();
  }

  create(value) {
    return this.db.collection('job_executor').add({
      description: value.description,
      lat: value.lat,
      lng: value.lng
    });
  }
}
