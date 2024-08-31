import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  @Input() data: string = 'No values';

  constructor(
    private router: Router,
    // private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.username !== '' && this.password !== '') {
      // this.authService.setUserName(this.username)
      // this.router.navigate(['/dashboard'], { queryParams: { username: this.username } });
      // Pass the username in the navigation state
      this.router.navigate(['/dashboard'], { state: { username: this.username } });
    } else {
      alert('Invalid credentials');
    }
  }
}
