import { Firebase } from '@ionic-native/firebase/ngx';
import { environment } from '@bn8-environments/environment'
import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

environment

@Injectable({
  providedIn: 'root'
})
export class DbService {
  readonly ROOT_URL = environment.firebase.URL

  db
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let params = new HttpParams()
    params = params.set('loc', navigator.language)
    params = params.set('isA', '1')

    this.db = this.http.get(this.ROOT_URL, { params })
  }

  getDb() {
    return this.db
  }
}