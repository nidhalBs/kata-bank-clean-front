
import { Component } from '@angular/core';
import {Router, RouterOutlet,} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected title: string = 'kata-bank-clean';
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
