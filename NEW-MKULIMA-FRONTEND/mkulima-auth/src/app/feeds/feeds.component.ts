import { Component, OnInit } from '@angular/core';
import { CatalogueFeedService } from 'src/app/services/catalogue-feed.service';


@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  catalogues: any = [];

  constructor(private catalogueservice: CatalogueFeedService) { }

  ngOnInit(): void {
    this.catalogueservice.getCatalogue().subscribe((data) =>{
      this.catalogues = data;
      console.log(this.catalogues);

    })
  }

}
