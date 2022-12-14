import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  // techNews data
  techNewsData : any = [];
  constructor(private _restService : RestService ) { }

  ngOnInit(): void {
    this._restService.topTechNews().subscribe((result) =>{
      console.log(result.articles);
      this.techNewsData = result.articles;
    })
    }

}
