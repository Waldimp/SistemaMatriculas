import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) {  }

  public Workers = [];
  public Worker = ''; 

  ngOnInit() {
    this.dataApi.getAllWorkers().subscribe(Workers => {
      console.log('WORKERS', Workers );
      this.Workers = Workers;
    })
  }
}
