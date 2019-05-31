import {Component, OnInit} from '@angular/core';
import {JobexecutorService} from '../../service/jobexecutor.service';
import {FormBuilder} from '@angular/forms';
import {JobExecutor} from '../../model/jobExecutor';
import {Router} from '@angular/router';
import * as L from 'leaflet';
import {FirebaseService} from '../../service/firebase.service';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';

@Component({
  selector: 'app-job-executor',
  templateUrl: './job-executor.component.html',
  styleUrls: ['./job-executor.component.css']
})
export class JobExecutorComponent implements OnInit {

  protected jobExecutor: JobExecutor = {};
  protected formJob;
  protected long: HTMLElement;
  protected lati: HTMLElement;

  constructor(private service: JobexecutorService,
              private firebaseService: FirebaseService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.formJob = formBuilder.group({
      description: [''],
      lat: [''],
      lng: ['']
    });
  }

  ngOnInit() {
    const myfrugalmap = L.map('frugalmap').setView([33.5818856, -7.6477929], 13);
    const marker = L.marker([33.5818856, -7.6477929], {
      draggable: true
    }).addTo(myfrugalmap);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);

    // tslint:disable-next-line:only-arrow-functions
    marker.on('dragend', function() {
      (document.getElementById('lat') as HTMLInputElement).value = String(marker.getLatLng().lat);
      (document.getElementById('lng') as HTMLInputElement).value = String(marker.getLatLng().lng);

      const jExec = new JobExecutor();

      jExec.lat = (document.getElementById('lat') as HTMLInputElement).value;
      jExec.lng = (document.getElementById('lng') as HTMLInputElement).value;

    });
  }

  fnc(jExec: JobExecutor) {
    /*this.firebaseService.update('Iq285cV0OSpVUhuUoBGY', jExec).then(value => {
      // this.router.navigate(['jobexecutorsLFT']);
    });*/
  }

  get description() {
    return this.formJob.get('description');
  }

  get lat() {
    return this.formJob.get('lat');
  }

  get lng() {
    return this.formJob.get('lng');
  }

  saveJobExecutor() {
    this.jobExecutor.description = this.formJob.controls.description.value;
    this.jobExecutor.lat = (document.getElementById('lat') as HTMLInputElement).value;
    this.jobExecutor.lng = (document.getElementById('lng') as HTMLInputElement).value;
    this.service.saveJobExecutor(this.jobExecutor).subscribe(
      value => {
        if (this.jobExecutor.id == null) {
          console.log('Job Ajouté avec succes');
        } else {
          console.log('Job Modifié avec succes');
        }
        this.router.navigate(['jobexecutorsLFT']);
      }, error1 => {

      });
    /*this.firebaseService.create(this.jobExecutor).then(value => {
      this.router.navigate(['jobexecutorsLFT']);
    });*/
  }
}

