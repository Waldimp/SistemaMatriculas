import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {UserInterface} from '../../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }

  user: UserInterface = {
    name: '',
    email: '',
  }

  ngOnInit() {
    this.authService.isAuth().subscribe(user =>{
      if(user){
        this.user =user;
        console.log('USER ', user);
      }
    })
  }

}