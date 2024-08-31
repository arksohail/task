import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  username: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    // Safely extract the state in the constructor
    const state = navigation?.extras.state as { username: string };
    if (state && state.username) {
      this.username = state.username;
    } else {
      // Redirect to login if username is not present in the state
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.username = params['username'] || '';

    //   // Redirect to login if username is not present
    //   if (!this.username) {
    //     this.router.navigate(['/login']);
    //   }
    // });
  }


}
