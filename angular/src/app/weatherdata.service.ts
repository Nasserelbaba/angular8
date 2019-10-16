import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {urls} from '../../servicess/url';

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  private urll=urls;
  constructor(private http:HttpClient) { }
  getdata(){
    return this.http.get(this.urll.main_url);
  }

}
