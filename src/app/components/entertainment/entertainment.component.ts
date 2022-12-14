import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  entertainmentData : any = [];
  constructor(private _restService : RestService) { }

  ngOnInit(): void {
    this._restService.topentertainmentNews().subscribe((result)=>{
          console.log(result.articles);
          this.entertainmentData = result.articles
    })
  }

}
