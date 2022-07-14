import { Component, OnInit } from '@angular/core';
import { CatalogueFeedService } from 'src/app/services/catalogue-feed.service';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  
  catalogues: any = [];

  constructor(private catalogueservice: CatalogueFeedService) { }

  ngOnInit(): void {
    this.catalogueservice.getCatalogue().subscribe((data) =>{
      this.catalogues = data;
      console.log(this.catalogues);

    })
  }

}
