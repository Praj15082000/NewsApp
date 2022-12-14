import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
    ScienceData : any = [];
  constructor(private _restService : RestService) { }

  ngOnInit(): void {
    this._restService.topscienceNews().subscribe((result)=>{
        console.log(result.articles);
        this.ScienceData = result.articles
    })
  }

}
