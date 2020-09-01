import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-validarnpe',
  templateUrl: './validarnpe.component.html',
  styleUrls: ['./validarnpe.component.css']
})
export class ValidarnpeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }




  onValidateNPE(npeForm:NgForm): void{
    this.onLogin();
  }





  onLogin(): void{
    this.router.navigate(['']);
  }

}
