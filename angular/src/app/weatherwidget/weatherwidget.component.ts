import { Component, OnInit } from '@angular/core';
import { WeatherdataService } from '../weatherdata.service';
@Component({
  selector: 'app-weatherwidget',
  templateUrl: './weatherwidget.component.html',
  styleUrls: ['./weatherwidget.component.css']
})
export class WeatherwidgetComponent implements OnInit {
  private apidata:any;
  constructor(private weatherdata:WeatherdataService) { }

  ngOnInit() {
   this.weatherdata.getdata()
   .subscribe(data=>this.apidata=data);
   this.time();

  }

   display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    setTimeout('this.time()',refresh);
    }
    time(){
      var dt = new Date();
      document.getElementById("timeHour").innerHTML =(("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2))+":"+ (("0"+dt.getSeconds()).slice(-2));
      this.display_c();
    }

}
