import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {
topHeadLineNewsdata : any = [];
  constructor(private _restService : RestService ) { }

  ngOnInit(): void {
    this._restService.topHeadlines().subscribe((result) =>{
      console.log(result.articles);
      this.topHeadLineNewsdata = result.articles
    })
  }

}
