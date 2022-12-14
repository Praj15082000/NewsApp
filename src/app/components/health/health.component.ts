import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
   healthData : any = [];
  constructor(private _restService : RestService) { }

  ngOnInit(): void {
    this._restService.tophealthNews().subscribe((result)=>{
      console.log(result.articles);
      this.healthData = result.articles
    })
  }

}
