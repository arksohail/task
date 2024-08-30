import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: string = "";
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.username = this.authService.getUserName();
  }


}
