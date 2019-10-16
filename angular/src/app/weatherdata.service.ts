import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {url} from '../../services/url';

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  private urll=url;
  constructor(private http:HttpClient) { }
  getdata(){
    return this.http.get(this.urll.main_url);
  }

}
