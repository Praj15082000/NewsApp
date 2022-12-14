import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
  SportData : any = [];
  constructor(private _restServiice : RestService) { }

  ngOnInit(): void {
    this._restServiice.topSportsNews().subscribe((result)=>{
        console.log(result.articles);
        this.SportData = result.articles;
    })
  }

}
