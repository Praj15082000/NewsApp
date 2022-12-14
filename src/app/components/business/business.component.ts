import { Component, OnInit } from '@angular/core';
 import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
    businessNewsData : any = [];
  constructor(private _restService : RestService) { }

  ngOnInit(): void {
    this._restService.topbusinessNews().subscribe((result) =>{
      console.log(result.articles);
      this.businessNewsData = result.articles
    })
  }

}
