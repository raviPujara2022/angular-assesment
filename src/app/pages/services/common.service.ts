import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Constants } from 'src/app/@shared/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  selectedItem = new Subject<any>();

  constructor(private http: HttpClient) { }

  getSearchData() {
    return this.http.get(`${Constants.apiUrl}/?limit=1100&offset=0`);
  }

  getPaginatedData(url: string) {
    return this.http.get(url)
  }

  getDataSelectedItem(url: string) {
    return this.http.get(`${url}`);
  }
}
